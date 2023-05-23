// @ts-nocheck



const {NEXT_PUBLIC_API_URL} = process.env;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${NEXT_PUBLIC_API_URL}/en</loc>
        <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_PUBLIC_API_URL}/ru</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_PUBLIC_API_URL}/ua</loc>
       <priority>1</priority>
     </url>
     <url>
       <loc>${NEXT_PUBLIC_API_URL}/en/contacts</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${NEXT_PUBLIC_API_URL}/ru/contacts</loc>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${NEXT_PUBLIC_API_URL}/ua/contacts</loc>
       <priority>0.8</priority>
     </url>
     ${posts
       .map((page) => {
         return `
       <url>
           <loc>${NEXT_PUBLIC_API_URL}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}${page.attributes.url}</loc>
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
  const request = await fetch(`${NEXT_PUBLIC_API_URL}/api/pages?locale=all`);
  const posts = await request.json();

  const sitemap = generateSiteMap(posts.data);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;