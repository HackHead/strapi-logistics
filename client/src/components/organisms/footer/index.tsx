// @ts-nocheck

import { getFooterGenerall, getContacts, server } from '@/http';
import { Contacts } from '@/pages/contacts';
import { useEffect, useState } from 'react';
import { initialContacts } from '@/pages/contacts';
import { useRouter } from 'next/router';
import Link from 'next/link';
import $t from '@/locale/global';

export interface GenerallData {
  twitter_url: string;
  facebook_url: string;
  youtube_url: string;
  linkedin_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  copyright: string;
}

export interface NavItemAttributes {
  order: number;
  title: string;
  url: string;
  target: string;
  createdAt: string;
  updatedAt: string;
  children?: string[];
}

export interface NavItem {
  id: number;
  attributes: NavItemAttributes;
}

export interface NavigationData {
  data: {
    id: number;
    attributes: {
      title: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      items: {
        data: NavItem[];
      };
    };
  };
  meta: {};
}

const Footer = () => {
  const router = useRouter();
  const locale = router.locale;

  const [generall, setGenerall] = useState<GenerallData>({
    twitter_url: '',
    facebook_url: '',
    youtube_url: '',
    linkedin_url: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    copyright: '',
  });

  const [contacts, setContacts] = useState<Contacts>(initialContacts);

  const [nav1, setNav1] = useState<{ title: string; items: NavItem[] }>({
    title: '',
    items: [],
  });

  const [nav2, setNav2] = useState<{ title: string; items: NavItem[] }>({
    title: '',
    items: [],
  });

  const fetchGenerallData = async () => {
    try {
      const res = await server.get('/footer-generall');
      setGenerall(res.data?.data?.attributes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await server.get(`/contact`);

      setContacts(res.data?.data?.attributes);
    } catch (error) {
      console.error(error);
    }
  };

  // Получаем footer меню от страпи
  const fetchNav = async () => {
    try {
      const res = await server.get<NavigationData>(
        '/menus?nested&filters[slug][$eq]=footerServices&populate=*'
      );
      const res2 = await server.get<NavigationData>(
        '/menus?nested&filters[slug][$eq]=footerAbout&populate=*'
      );

      const title = res.data.data[0].attributes.title;
      const items = res.data.data[0].attributes.items.data;

      const title2 = res2.data.data[0].attributes.title;
      const items2 = res2.data.data[0].attributes.items.data;

      setNav2({ title, items });
      setNav1({ title: title2, items: items2 });
    } catch (error) {
      console.error(error);
    }
  };

  // Эти запросы будут выполнены после того как компонент будет отрендерен
  useEffect(() => {
    fetchGenerallData();
    fetchContacts();
    fetchNav();
  }, []);

  return (
    <div
      className="container-fluid bg-primary text-white footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row gy-5 gx-4 pt-3">
          <div className="col-12">
            <h5 className="fw-bold text-white mb-4">
              {$t[locale].footer.subscription.title}
            </h5>
            <div className="position-relative" style={{ maxWidth: '400px' }}>
              <input
                className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder={$t[locale].footer.subscription.placeholder}
              />
              <button
                type="button"
                className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
              >
                {$t[locale].footer.subscription.submit}
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row gy-5 g-4">
              <div className="col-md-6">
                <h5 className="fw-bold text-white mb-4">
                  {$t[locale].footer.about.title}
                </h5>
                {nav1?.items?.map(item => {
                  return (
                    <a
                      key={item.id}
                      className="btn btn-link"
                      href={item.attributes.url}
                    >
                      {locale === 'ru'
                        ? item.attributes.title
                        : item.attributes[`title_${locale}`]}
                    </a>
                  );
                })}
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold text-white mb-4">
                  {$t[locale].footer.services.title}
                </h5>
                {nav2?.items?.map(item => {
                  return (
                    <a
                      key={item.id}
                      className="btn btn-link"
                      href={item.attributes.url}
                    >
                      {locale === 'ru'
                        ? item.attributes.title
                        : item.attributes[`title_${locale}`]}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold text-white mb-4">
              {$t[locale].footer.get_in_touch.title}
            </h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              {contacts.location}
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              <a
                href={`tel:${contacts.phone_number}`}
                style={{ color: '#fff' }}
              >
                {contacts.phone_number}
              </a>
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              <a href={`mailto:${contacts.email}`} style={{ color: '#fff' }}>
                {contacts.email}
              </a>
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href={generall.twitter_url}
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={generall.facebook_url}
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={generall.youtube_url}
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href={generall.linkedin_url}
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Форма в футере */}
          {/* <div className="col-md-6 col-lg-4 mt-lg-n5">
                        <div className="bg-light rounded" style={{ padding: '30px' }}>
                            <input type="text" className="form-control border-0 py-2 mb-2" placeholder="Name" />
                            <input type="email" className="form-control border-0 py-2 mb-2" placeholder="Email" />
                            <textarea className="form-control border-0 mb-2" rows={2} placeholder="Message" defaultValue={""} />
                            <button className="btn btn-primary w-100 py-2">Send Message</button>
                        </div>
                    </div> */}
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row  gy-1">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span
                dangerouslySetInnerHTML={{ __html: generall.copyright }}
              ></span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">{$t[locale].footer.copyright.menu.home}</Link>
                <Link href="/">{$t[locale].footer.copyright.menu.cookies}</Link>
                <Link href="/">{$t[locale].footer.copyright.menu.help}</Link>
                <Link href="/">{$t[locale].footer.copyright.menu.faq}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
