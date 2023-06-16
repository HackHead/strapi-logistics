// @ts-nocheck
import getConfig from 'next/config';
import { server } from '../http/index';

const { publicRuntimeConfig } = getConfig();
const { NEXT_HOST } = publicRuntimeConfig;

function generateSiteMap(posts, tags) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${NEXT_HOST}/en</loc>
        <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ru</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ua</loc>
       <priority>1</priority>
     </url>

     <url>
        <loc>${NEXT_HOST}/en/services</loc>
        <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ru/services</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ua/services</loc>
       <priority>1</priority>
     </url>
     
     
     <url>
       <loc>${NEXT_HOST}/en/contacts</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ru/contacts</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${NEXT_HOST}/ua/contacts</loc>
       <priority>0.8</priority>
     </url>
     ${posts
       .map(page => {
         return `
       <url>
           <loc>${NEXT_HOST}/${
           page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale
         }${page.attributes.url}</loc>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}


       ${tags
         .map(page => {
           return `
        <url>
            <loc>${NEXT_HOST}/${
             page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale
           }/service${page.attributes.url}</loc>
            <priority>0.8</priority>
        </url>
      `;
         })
         .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    const request = await server.get(`/pages?locale=all`);
    const posts = await request.data;

    const req2 = await server.get(`/page-seos?locale=all`);
    const tags = await req2.data;

    const sitemap = generateSiteMap(posts.data, tags.data);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default SiteMap;
