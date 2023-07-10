//@ts-nocheck

// Страница контакто как и главная страница (index.tsx) сделаны статическими
// То есть их не нужно создавать в страпи и добавлять в меню в страпи,
// Вы можете изменять их так же как делаете в обычном html с единственной поправкой
// Что нужно использовать className вместо class

import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import { useEffect, useState } from 'react';
import { server } from '@/http';
import Script from 'next/script';
import { useRouter } from 'next/router';
import $t from '@/locale/global';
import getConfig from 'next/config';

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

export default function Home({
  pages
}) {
  const [contacts, setContacts] = useState<Contacts>(initialContacts);
  const router = useRouter();
  const locale = router.locale === 'ua' ? 'uk' : router.locale;
  const { publicRuntimeConfig } = getConfig();
  const { NEXT_HOST } = publicRuntimeConfig;
  const [prevLocale, setPrevLocale] = useState(locale);

  // Функция которая делает запрос к страпи для получения контактов
  const fetchContacts = async () => {
    try {
      const res = await server.get<StrapiContacts>('/contact');

      setContacts(res?.data?.data?.attributes);
    } catch (error) {
      throw new Error(`Во время получения произошла ошибка: ${error}`);
    }
  };

  useEffect(() => {
      fetchContacts();
      if(prevLocale !== locale) {
       router.reload()
      }
  }, [locale]);


  return (
    <>
      <Head>
        <title>{$t[locale].menu.search}</title>
        <meta
          name="description"
          content={$t[locale].menu.search}
        />
        <meta name="keywords" content={$t[locale].contacts.seo_keywords} />
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
                <div className="container mb-5 mt-5 py-2 px-lg-5 mt-md-1 mt-sm-1 mt-xs-0 mt-lg-5">
                  <div className="row g-5 pt-1">
                    <div
                      className="col-12 text-center text-lg-start"
                      style={{ marginTop: '40px', marginBottom: '50px' }}
                    >
                      <h1 className="display-4 text-white animated slideInLeft">
                        {$t[locale].menu.search}
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
                              {$t[locale].menu.search}
                            </a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {
              pages.length ?
                <div className="container-xl" style={{ maxWidth: '1140px', margin: '0 auto' }}>
                  <>
                    {
                      pages.map((page) => {
                        return (
                          <div className="row" key={page.id}>
                            <div className="col-md-12">
                              <div className="search-item" style={{ marginTop: '1.5rem' }}>
                                <h4 className="mb-1"><a href="#">{page.attributes.seo_title}</a></h4>
                                <a className="font-13 text-success mb-3" href={`${NEXT_HOST}/${locale}${page.attributes.url}`}>{`${NEXT_HOST}/${locale}${page.attributes.url}`}</a>
                                <p className="mb-0 text-muted">{page.attributes.seo_description.length > 256 ? `${page.attributes.seo_description.slice(0, 256)}...` : page.attributes.seo_description}</p>
                              </div>
                              <hr className="hr" />

                              <div className="clearfix"></div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </>
                </div> : <div className="container-xl" style={{ maxWidth: '1140px', margin: '0 auto' }}>
                  <h2 className='text-primary' style={{textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem'}}>Results not found</h2>
                </div>
            }

            {/* <div className="d-flex justify-content-center mt-5">
              {true && (
                <PaginationControl
                  page={1}
                  between={4}
                  total={125}
                  limit={5}
                  changePage={page => {
                    // setPaginationPage(page);
                    // goToPage(page);
                  }}
                  ellipsis={1}
                />
              )}
            </div> */}
          </DefaultLayout>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ query, locale }: Query) {
  const { q } = query;

  try {
    const serverPages = await server.get(
      `/pages?filters[$or][0][seo_title][$containsi]=${q}&filters[$or][1][seo_description][$containsi]=${q}&filters[$or][2][body][$containsi]=${q}&locale=${locale === 'ua' ? 'uk' : locale}`
    );
    const serverSeoPages = await server.get(
      `/page-seos?filters[$or][0][seo_title][$containsi]=${q}&filters[$or][1][seo_description][$containsi]=${q}&filters[$or][2][seo_description][$containsi]=${q}&locale=${locale === 'ua' ? 'uk' : locale}`
    );
    const pages = serverPages.data.data;
    const seoPages = serverSeoPages.data.data;


    const allPages = [...pages, ...seoPages];


    return {
      props: {
        pages: allPages
      },
    };
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    };
  }
}
