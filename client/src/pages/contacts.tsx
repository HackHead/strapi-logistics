// Страница контакто как и главная страница (index.tsx) сделаны статическими
// То есть их не нужно создавать в страпи и добавлять в меню в страпи,
// Вы можете изменять их так же как делаете в обычном html с единственной поправкой
// Что нужно использовать className вместо class

import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import { useEffect, useState } from 'react';
import { server } from '@/http';
import Script from 'next/script';

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
export default function Home() {
  const [contacts, setContacts] = useState<Contacts>(initialContacts);

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
    // Делаем сам запрос после того как страница прогрузилась
    fetchContacts();
  }, []);
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta name="description" content="Страница контактов" />
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
                        Контакты
                      </h1>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                          <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                              Главная
                            </a>
                          </li>
                          <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                              Контакты
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
              <div className="container px-lg-5">
                <div
                  className="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ maxWidth: 600 }}
                >
                  <h1 className="mb-3">Contact For Any Query</h1>
                  <p className="mb-1">
                    Vero justo sed sed vero clita amet. Et justo vero sea diam
                    elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam
                    erat vero elitr sit clita.
                  </p>
                </div>
                <div className="row g-5">
                  <div className="col-lg-7 col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <form>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                              />
                              <label htmlFor="name">Your Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                              />
                              <label htmlFor="email">Your Email</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                              />
                              <label htmlFor="subject">Subject</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                placeholder="Leave a message here"
                                id="message"
                                style={{ height: 150 }}
                                defaultValue={''}
                              />
                              <label htmlFor="message">Message</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100 py-3"
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-5 col-md-6 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="section-title position-relative mx-auto mb-4 pb-4">
                      <h3 className="fw-bold mb-0">Customer Support</h3>
                    </div>
                    <p className="mb-2">
                      <i className="fa fa-map-marker-alt text-primary me-3" />
                      {contacts.location}
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-phone-alt text-primary me-3" />
                      {contacts.phone_number}
                    </p>
                    <p className="mb-2">
                      <i className="fa fa-envelope text-primary me-3" />
                      {contacts.email}
                    </p>
                    <div className="border rounded text-center p-4 mt-4">
                      <h3 className="fw-bold mb-4">Need Any Help?</h3>
                      <a className="btn btn-primary py-3 px-5" href="">
                        Let`s Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DefaultLayout>
        </div>
      </div>
    </>
  );
}
