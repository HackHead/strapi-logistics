import Breadcrumbs, { Crumb } from '@/components/molecules/Breacrumbs';

export interface HeroProps {
  title: string;
  crumbs: Crumb[];
}

const Hero = ({ title, crumbs }: HeroProps) => {
  return (
    <div className="container-xxl py-5 bg-primary hero-header mb-5">
      <div className="container mb-5 mt-5 py-2 px-lg-5 mt-md-1 mt-sm-1 mt-xs-0 mt-lg-5">
        <div className="row g-5 pt-1">
          <div className="col-12 text-center text-lg-start" style={{marginTop: '40px', marginBottom: '50px'}}>
            <h1 className="display-4 text-white animated slideInLeft">
              {title}
            </h1>
            <Breadcrumbs crumbs={crumbs} pageTitle={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
