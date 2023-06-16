// @ts-nocheck
import getConfig from 'next/config';
import {server} from '@/http/index'

const { publicRuntimeConfig } = getConfig();
const { NEXT_HOST } = publicRuntimeConfig;

function generateTxt(posts, tags) {
  return `
${posts
.map((page) => {
  return `
  ${NEXT_HOST}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}${page.attributes.url}\n
  ${page.attributes.seo_title}\n
  ${page.attributes.page_title}\n
  ${page.attributes.keywords}\n\n
`; }).join('')}
${tags
.map((page) => {
  return `
  ${NEXT_HOST}/${page.attributes.locale === 'uk' ? 'ua' : page.attributes.locale}/service${page.attributes.url}\n
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
  const request = await server(`/pages?locale=all`);
  const posts = await request.data;

  const req2 = await server(`/page-seos?locale=all`);
  const tags = await req2.data;
  
  const txt = generateTxt(posts.data, tags.data);

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(txt);
  res.end();

  return {
    props: {},
  };
}

export default Map;