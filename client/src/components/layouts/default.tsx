// @ts-nocheck ;
import { ReactNode } from 'react';
import Footer from '../organisms/footer';
import Header from '../organisms/header';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <Header />
          {children}
          <a
            href="#"
            className="btn btn-lg btn-secondary btn-lg-square back-to-top"
            style={{zIndex: 10}}
          >
            <i className="bi bi-arrow-up" />
          </a>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
