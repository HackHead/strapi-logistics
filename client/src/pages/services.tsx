//@ts-nocheck

import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import { useEffect, useState } from 'react';
import { server } from '@/http';
import Script from 'next/script';
import { useRouter } from 'next/router';
import $t from '@/locale/global'
import Link from 'next/link';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export interface Contacts {
    location: string;
    phone_number: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
export interface StrapiContacts {
    data: {
        id: number;
        attributes: Contacts;
    };
    meta: {};
}

export const initialContacts: Contacts = {
    location: '',
    phone_number: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
};


export default function Services({ tags, pagination }) {
    const router = useRouter();
    const locale = router.locale;

    const {query} = router;
    const {perPage} = query;
    
    const [paginationPage, setPaginationPage] = useState(pagination.page)

    const goToPage = (n) => router.push(`/services?page=${n}&perPage=${perPage ? perPage : ''}`)
    
    return (
        <>
            <Head>
                <title>{$t[locale].services.seo_title}</title>
                <meta name="description" content={$t[locale].services.seo_description} />
                <meta name="keywords" content={$t[locale].services.seo_keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                defer
            ></Script>
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl position-relative p-0">
                    <DefaultLayout>
                        <div className="container-xxl position-relative p-0">
                            <div className="container-xxl py-5 bg-primary hero-header mb-5">
                                <div className="container my-5 py-5 px-lg-5">
                                    <div className="row g-5 pt-5">
                                        <div className="col-12 text-center text-lg-start">
                                            <h1 className="display-4 text-white animated slideInLeft">
                                                {$t[locale].menu.services}
                                            </h1>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                                                    <li className="breadcrumb-item">
                                                        <a className="text-white" href="#">
                                                            {$t[locale].menu.main}
                                                        </a>
                                                    </li>
                                                    <li className="breadcrumb-item">
                                                        <a className="text-white" href="#">
                                                            {$t[locale].menu.services}
                                                        </a>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-xxl py-5">
                            <div>
                                {tags.map((tag) => {
                                    return <Link href={`/service${tag.attributes.   url}`} className="mx-1 badge bg-primary" key={tag.id}>{tag.attributes.page_title}</Link>
                                })}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            {
                               pagination.pageCount > 1 && <PaginationControl
                                    page={paginationPage}
                                    between={4}
                                    total={pagination.total}
                                    limit={pagination.pageSize}
                                    changePage={(page) => {
                                        setPaginationPage(page)
                                        goToPage(page)
                                    }}
                                    ellipsis={1}
                                />
                            }

                        </div>
                    </DefaultLayout>
                </div>
            </div>
        </>
    );
}
export async function getServerSideProps({ query, locale }: Query) {
    const { page = 1, perPage = 100 } = query;

    try {
        const res = await server.get(`/page-seos?locale=${locale}&pagination[page]=${page}&pagination[pageSize]=${perPage}`);

        const tags = res.data.data;
        const pagination = res.data.meta.pagination;


        if(page > pagination.pageCount) {
            return {
                notFound: true
            }
        }
        return {
            props: {
                tags,
                pagination
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}