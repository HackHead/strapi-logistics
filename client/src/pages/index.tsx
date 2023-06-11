// @ts-nocheck

import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router';
import $t from '@/locale/global';

export default function Home() {
  const router = useRouter();
  const locale = router.locale;

  return (
    <>
      <Head>
        <title>{$t[locale].home.seo_title}</title>
        <meta name="description" content={$t[locale].home.seo_description} />
        <meta name="keywords" content={$t[locale].home.seo_keywords}/>
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
            <div className="container-xxl py-5 bg-primary hero-header mb-5">
              <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5">
                  <div className="col-lg-6 pt-5 text-center text-lg-start">
                    <h1 className="display-4 text-white mb-4 animated slideInLeft">
                      {$t[locale].home.page_title}
                    </h1>
                    <p className="text-white animated slideInLeft">
                      {$t[locale].home.description}
                    </p>
                    <h1 className="text-white mb-4 animated slideInLeft">
                      <small
                        className="align-top fw-normal"
                        style={{ fontSize: '15px', lineHeight: '25px' }}
                      >
                        {$t[locale].home.starting}:
                      </small>
                      <span>$2.49</span>
                      <small
                        className="align-bottom fw-normal"
                        style={{ fontSize: '15px', lineHeight: '33px' }}
                      >
                        / {$t[locale].home.month}
                      </small>
                    </h1>
                    <Link
                      href="/"
                      className="btn btn-secondary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      {$t[locale].home.cta_btn}
                    </Link>
                  </div>
                  <div className="col-lg-6 text-center text-lg-start">
                    <img
                      className="img-fluid animated zoomIn"
                      src="/img/hero.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="modal fade" id="searchModal" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen">
                  <div
                    className="modal-content"
                    style={{ background: 'rgba(29, 40, 51, 0.8)' }}
                  >
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn bg-white btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                      <div
                        className="input-group"
                        style={{ maxWidth: '600px' }}
                      >
                        <input
                          type="text"
                          className="form-control bg-transparent border-light p-3"
                          placeholder="Type search keyword"
                        />
                        <button className="btn btn-light px-4">
                          <i className="bi bi-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container-xxl domain mb-5"
                style={{ marginTop: '90px' }}
              >
                <div className="container px-lg-5">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div
                        className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: '600px' }}
                      >
                        <h1 className="mb-3">{$t[locale].home.search_domain.title}</h1>
                        <p className="mb-1">
                          {$t[locale].home.search_domain.paragraph}
                        </p>
                      </div>
                      {/* здесь была строка с поиском */}
                      {/* <div
                        className="position-relative w-100 my-3 wow fadeInUp"
                        data-wow-delay="0.3s"
                      >
                        <input
                          className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                          type="text"
                          placeholder={$t[locale].home.search_domain.placeholder}
                        />
                        <button
                          type="button"
                          className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                        >
                          {$t[locale].home.search_domain.submit}
                        </button>
                      </div> */}
                      <div
                        className="row g-3 wow fadeInUp"
                        data-wow-delay="0.5s"
                        style={{justifyContent: 'center'}}
                      >
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.com</h5>
                          <p className="mb-0">$9.99/{$t[locale].home.search_domain.year}</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.net</h5>
                          <p className="mb-0">$9.99/{$t[locale].home.search_domain.year}</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.org</h5>
                          <p className="mb-0">$9.99/{$t[locale].home.search_domain.year}</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.us</h5>
                          <p className="mb-0">$9.99/{$t[locale].home.search_domain.year}</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.eu</h5>
                          <p className="mb-0">$9.99/year</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                          <h5 className="fw-bold text-primary mb-1">.co.uk</h5>
                          <p className="mb-0">$9.99/year</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-xxl py-5">
                <div className="container px-lg-5">
                  <div className="row g-5 align-items-center">
                    <div
                      className="col-lg-7 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="section-title position-relative mb-4 pb-4">
                        <h1 className="mb-2">{$t[locale].home.welcome.title}</h1>
                      </div>
                      <p className="mb-4">
                        {$t[locale].home.welcome.paragraph}
                      </p>
                      <div className="row g-3">
                        <div
                          className="col-sm-4 wow fadeIn"
                          data-wow-delay="0.1s"
                        >
                          <div className="bg-light rounded text-center p-4">
                            <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                            <h2 className="mb-1" data-toggle="counter-up">
                              1234
                            </h2>
                            <p className="mb-0">{$t[locale].home.welcome.experts}</p>
                          </div>
                        </div>
                        <div
                          className="col-sm-4 wow fadeIn"
                          data-wow-delay="0.3s"
                        >
                          <div className="bg-light rounded text-center p-4">
                            <i className="fa fa-users fa-2x text-primary mb-2" />
                            <h2 className="mb-1" data-toggle="counter-up">
                              1234
                            </h2>
                            <p className="mb-0">{$t[locale].home.welcome.clients}</p>
                          </div>
                        </div>
                        <div
                          className="col-sm-4 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <div className="bg-light rounded text-center p-4">
                            <i className="fa fa-check fa-2x text-primary mb-2" />
                            <h2 className="mb-1" data-toggle="counter-up">
                              1234
                            </h2>
                            <p className="mb-0">{$t[locale].home.welcome.projects}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        className="img-fluid wow zoomIn"
                        data-wow-delay="0.5s"
                        src="img/about.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-xxl py-5">
                <div className="container px-lg-5">
                  <div
                    className="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: '600px' }}
                  >
                    <h1 className="mb-3">{$t[locale].home.plans.title}</h1>
                    <p className="mb-1">
                      {$t[locale].home.plans.paragraph}
                    </p>
                  </div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores sed accusantium aspernatur animi eum eligendi! Autem, qui? Nihil, dignissimos perspiciatis. Assumenda fuga consequatur sunt, laborum quos sapiente mollitia deserunt itaque quia optio voluptate accusantium, a hic, unde aliquid reiciendis? Error inventore possimus praesentium dignissimos consequuntur sapiente, corrupti necessitatibus quam tempore molestiae! Sint accusamus similique rerum quos facilis commodi cupiditate veniam nisi suscipit, nesciunt neque accusantium dolorum blanditiis odio, aliquid tempora ea placeat dolores quis! Harum quibusdam ipsam cum repudiandae incidunt minus hic, quaerat optio distinctio ducimus nihil exercitationem explicabo, impedit dolorum, molestias excepturi omnis veniam. Numquam consectetur porro minima.</div>
                </div>
              </div>
              <div className="container-xxl py-5">
                <div className="container px-lg-5">
                  <div
                    className="section-title position-relative text-center mx-auto mb-5 pb-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: '600px' }}
                  >
                    <h1 className="mb-3">{$t[locale].home.comparing.title}</h1>
                    <p className="mb-1">
                    {$t[locale].home.comparing.paragraph}
                    </p>
                  </div>
                  <div className="row g-5 comparison position-relative">
                    <div className="col-lg-6 pe-lg-5">
                      <div className="section-title position-relative mx-auto mb-4 pb-4">
                        <h3 className="fw-bold mb-0">{$t[locale].home.comparing.shared.title}</h3>
                      </div>
                      <div className="row gy-3 gx-5">
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.1s"
                        >
                          <i className="fa fa-server fa-3x text-primary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.shared.uptime.title}</h5>
                          <p>
                            {$t[locale].home.comparing.shared.uptime.desc}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.3s"
                        >
                          <i className="fa fa-shield-alt fa-3x text-primary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.shared.security.title}</h5>
                          <p>
                            {$t[locale].home.comparing.shared.security.desc}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <i className="fa fa-cog fa-3x text-primary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.shared.panel.title}</h5>
                          <p>
                            {$t[locale].home.comparing.shared.uptime.title}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.7s"
                        >
                          <i className="fa fa-headset fa-3x text-primary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.shared.support.title}</h5>
                          <p>
                            {$t[locale].home.comparing.shared.support.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                      <div className="section-title position-relative mx-auto mb-4 pb-4">
                        <h3 className="fw-bold mb-0">{$t[locale].home.comparing.dedicated.title}</h3>
                      </div>
                      <div className="row gy-3 gx-5">
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.1s"
                        >
                          <i className="fa fa-server fa-3x text-secondary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.dedicated.uptime.title}</h5>
                          <p>
                            {$t[locale].home.comparing.dedicated.uptime.desc}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.3s"
                        >
                          <i className="fa fa-shield-alt fa-3x text-secondary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.dedicated.security.title}</h5>
                          <p>
                            {$t[locale].home.comparing.dedicated.security.desc}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.5s"
                        >
                          <i className="fa fa-cog fa-3x text-secondary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.dedicated.panel.title}</h5>
                          <p>
                            {$t[locale].home.comparing.dedicated.panel.desc}
                          </p>
                        </div>
                        <div
                          className="col-sm-6 wow fadeIn"
                          data-wow-delay="0.7s"
                        >
                          <i className="fa fa-headset fa-3x text-secondary mb-3" />
                          <h5 className="fw-bold">{$t[locale].home.comparing.dedicated.support.title}</h5>
                          <p>
                            {$t[locale].home.comparing.dedicated.support.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="container-xxl py-5 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="container px-lg-5">
                  <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 my-4">
                      <div
                        className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 ms-5 translate-middle bg-primary rounded-circle"
                        style={{
                          width: '45px',
                          height: '45px',
                          marginTop: '-3px',
                        }}
                      >
                        <i className="fa fa-quote-left text-white" />
                      </div>
                      <p className="mt-3">
                       {$t[locale].home.comments._1.body}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-1.jpg"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1">{$t[locale].home.comments._1.client}</h6>
                          <small>{$t[locale].home.comments._1.job}</small>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 my-4">
                      <div
                        className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 ms-5 translate-middle bg-primary rounded-circle"
                        style={{
                          width: '45px',
                          height: '45px',
                          marginTop: '-3px',
                        }}
                      >
                        <i className="fa fa-quote-left text-white" />
                      </div>
                      <p className="mt-3">
                        {$t[locale].home.comments._2.body}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-2.jpg"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1">{$t[locale].home.comments._2.client}</h6>
                          <small>{$t[locale].home.comments._1.job}</small>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 my-4">
                      <div
                        className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 ms-5 translate-middle bg-primary rounded-circle"
                        style={{
                          width: '45px',
                          height: '45px',
                          marginTop: '-3px',
                        }}
                      >
                        <i className="fa fa-quote-left text-white" />
                      </div>
                      <p className="mt-3">
                        {$t[locale].home.comments._3.body}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-3.jpg"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1">{$t[locale].home.comments._3.client}</h6>
                          <small>{$t[locale].home.comments._3.job}</small>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item position-relative bg-light border-top border-5 border-primary rounded p-4 mt-4">
                      <div
                        className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 ms-5 translate-middle bg-primary rounded-circle"
                        style={{
                          width: '45px',
                          height: '45px',
                          marginTop: '-3px',
                        }}
                      >
                        <i className="fa fa-quote-left text-white" />
                      </div>
                      <p className="mt-3">
                        {$t[locale].home.comments._4.body}
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          className="img-fluid flex-shrink-0 rounded-circle"
                          src="img/testimonial-4.jpg"
                          style={{ width: '50px', height: '50px' }}
                        />
                        <div className="ps-3">
                          <h6 className="fw-bold mb-1">{$t[locale].home.comments._4.client}</h6>
                          <small>{$t[locale].home.comments._1.job}</small>
                        </div>
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
                    style={{ maxWidth: '600px' }}
                  >
                    <h1 className="mb-3">{$t[locale].home.team.title}</h1>
                    <p className="mb-1">
                    {$t[locale].home.team.paragraph}
                    </p>
                  </div>
                  <div className="row g-4">
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-1.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._1.name}</h5>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <small style={{color: '#fff', fontWeight: 'bold'}}>{$t[locale].home.team.members._1.job}</small>
                          
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-2.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._2.name}</h5>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <small style={{color: '#fff', fontWeight: 'bold'}}>{$t[locale].home.team.members._2.job}</small>
                          
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-3.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._3.name}</h5>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <small style={{color: '#fff', fontWeight: 'bold'}}>{$t[locale].home.team.members._3.job}</small>
                          
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-4.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._4.name}</h5>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <small style={{color: '#fff', fontWeight: 'bold'}}>{$t[locale].home.team.members._4.job}</small>
                          
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-2.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._2.name}</h5>
                          <small>{$t[locale].home.team.members._2.job}</small>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-3.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._3.name}</h5>
                          <small>{$t[locale].home.team.members._3.job}</small>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div className="team-item border-top border-5 border-primary rounded shadow overflow-hidden">
                        <div className="text-center p-4">
                          <img
                            className="img-fluid rounded-circle mb-4"
                            src="img/team-4.jpg"
                            alt=""
                          />
                          <h5 className="fw-bold mb-1">{$t[locale].home.team.members._4.name}</h5>
                          <small>{$t[locale].home.team.members._4.job}</small>
                        </div>
                        <div className="d-flex justify-content-center bg-primary p-3">
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                          <a
                            className="btn btn-square text-primary bg-white m-1"
                            href="#"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div> */}
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
