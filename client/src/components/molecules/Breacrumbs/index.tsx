import React from 'react';

export interface BreadcrumbsProps {
  crumbs: Crumb[];
  pageTitle: string;
}
export interface Crumb {
  id: number;
  title: String;
  url: string;
}
const Breadcrumbs = ({crumbs, pageTitle}: BreadcrumbsProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
        <li className="breadcrumb-item" style={{color: 'white'}}>Главная</li>
        {
          crumbs.length ?
            crumbs.map(({id, title, url}) => {
              return (
                <li key={id} className="breadcrumb-item" style={{color: 'white'}}>{title}</li>
              )
            })
          :
            <li className="breadcrumb-item" style={{color: 'white'}}>{pageTitle}</li>
        }
      </ol>
    </nav>
  );
};



export default Breadcrumbs;