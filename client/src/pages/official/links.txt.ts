// @ts-nocheck
const {NEXT_PUBLIC_API_URL} = process.env;

function generateTxt(posts) {
  return `
     ${posts
       .map((page) => {
         return `
         ${NEXT_PUBLIC_API_URL}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}${page.attributes.url}\n
         ${page.attributes.seo_title}\n
         ${page.attributes.page_title}\n
         ${page.attributes.keywords}\n\n
     `;
       })
       .join('')}
 `;
}

function Map() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(`${NEXT_PUBLIC_API_URL}/api/pages?locale=all`);
  const posts = await request.json();

  const txt = generateTxt(posts.data);

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(txt);
  res.end();

  return {
    props: {},
  };
}

export default Map;