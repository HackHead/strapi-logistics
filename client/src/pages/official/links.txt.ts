// @ts-nocheck
const {NEXT_PUBLIC_API_URL} = process.env;

function generateTxt(posts, tags) {
  return `
${posts
.map((page) => {
  return `
  ${NEXT_PUBLIC_API_URL}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}${page.attributes.url}\n
  ${page.attributes.seo_title}\n
  ${page.attributes.page_title}\n
  ${page.attributes.keywords}\n\n
`; }).join('')}
${tags
.map((page) => {
  return `
  ${NEXT_PUBLIC_API_URL}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}/service${page.attributes.url}\n
  ${page.attributes.seo_title}\n
  ${page.attributes.page_title}\n
  ${page.attributes.keywords}\n\n
`;}).join('')}
 `;
}

function Map() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(`${NEXT_PUBLIC_API_URL}/api/pages?locale=all`);
  const posts = await request.json();

  const req2 = await fetch(`${NEXT_PUBLIC_API_URL}/api/page-seos?locale=all`);
  const tags = await req2.json();
  
  const txt = generateTxt(posts.data, tags.data);

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(txt);
  res.end();

  return {
    props: {},
  };
}

export default Map;