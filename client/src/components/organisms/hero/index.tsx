import Breadcrumbs, { Crumb } from "@/components/molecules/Breacrumbs";

export interface HeroProps {
    title: string;
    crumbs: Crumb[];
}


const Hero = ({title, crumbs}: HeroProps) => {
    return (
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
            <div className="container my-5 py-5 px-lg-5">
                <div className="row g-5 pt-5">
                    <div className="col-12 text-center text-lg-start">
                        <h1 className="display-4 text-white animated slideInLeft">{ title }</h1>
                        <Breadcrumbs crumbs={crumbs} pageTitle={title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;