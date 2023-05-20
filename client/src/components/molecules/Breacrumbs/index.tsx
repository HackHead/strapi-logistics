// @ts-nocheck

import React from 'react';
import { useRouter } from 'next/router';
import $t from '@/locale/global'

export interface BreadcrumbsProps {
  crumbs: Crumb[];
  pageTitle: string;
}

export interface Crumb {
  id: number;
  title: String;
  url: string;
}

const Breadcrumbs = ({ crumbs, pageTitle }: BreadcrumbsProps) => {
  const router = useRouter();
  const locale = router.locale;
  
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
        <li className="breadcrumb-item" style={{ color: 'white' }}>
          {$t[locale].menu.main}
        </li>
        {crumbs.length ? (
          crumbs.map((crumb) => {
            return (
              <li
                key={crumb.id}
                className="breadcrumb-item"
                style={{ color: 'white' }}
              >
                {locale === 'ru' ? crumb.title : crumb[`title_${locale}`]}
              </li>
            );
          })
        ) : (
          <li className="breadcrumb-item" style={{ color: 'white' }}>
            {pageTitle}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
