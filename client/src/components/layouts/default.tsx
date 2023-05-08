// @ts-nocheck ;
import { ReactNode } from "react";
import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Link from "next/link";

const DefaultLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
        <div className="container-xxl bg-white p-0">
            <div className="container-xxl position-relative p-0"> 
                <Header/>
                {children}
                <button  className="btn btn-lg btn-secondary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </button>
                <Footer/>
            </div>
        </div>
           
        </>
    )
}

export default DefaultLayout;