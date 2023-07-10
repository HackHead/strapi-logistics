import Breadcrumbs, { Crumb } from '@/components/molecules/Breacrumbs';
import { useEffect, useState } from 'react';

export interface HeroProps {
  title: string;
  crumbs: Crumb[];
}

const Hero = ({ title, crumbs }: HeroProps) => {
    const [updTtitle, setTitle] = useState('');
    useEffect(() => {
      if(title){
        setTitle(title.length > 75 ? `${title.slice(0,75)}...` : title)
      }
    }, [])
  return (
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container mb-5 mt-5 py-2 px-lg-5 mt-md-1 mt-sm-1 mt-xs-0 mt-lg-5">
        <div className="row g-5 pt-1">
          <div
            className="col-12 text-center text-lg-start"
            style={{ marginTop: '40px', marginBottom: '50px' }}
          >
            <h1 className="display-5 text-white animated slideInLeft">
              {updTtitle}
            </h1>
            <Breadcrumbs crumbs={crumbs} pageTitle={updTtitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;