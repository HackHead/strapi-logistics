// @ts-nocheck ;
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../organisms/footer';
import Header from '../organisms/header';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState<boolea>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <Header />
          {children}
          {isLoaded && (
            <a
              href="#"
              className="btn btn-lg btn-secondary btn-lg-square back-to-top"
              style={{ zIndex: 10, display: 'none' }}
            >
              <i className="bi bi-arrow-up" />
            </a>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
