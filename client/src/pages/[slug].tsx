// @ts-nocheck

import { server } from '@/http/index';
import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import Hero from '@/components/organisms/hero';
import { Crumb } from '@/components/molecules/Breacrumbs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SearchModal from '@/components/organisms/search-modal';

// Этот компонент будет генерироваться динамически на основании данных полученых из страпи например:
// Пользователь переходит на страницу yousite.com/PerevozkaGruzov в браузере, next.js приложение обращается
// к страпи и ищет в коллекции Page запись где поле slug - равно /PerevozkaGruzov. Страпи присылает нам данные
// next.js генерирует страницу и отправляет пользователю

// Изменять код в этом компоненте нужно осторожно, потому что это отобразиться на всех страницах которые генерируются динамически

// Интерфейсы - это часть от typescript, вам с ними взаимодействовать никак не нужно,
// они используются для упращения разработки, чтобы мы в приложении знали точно какие данные
// мы получаем из сервера. Это просто абстракция
export interface PageAttibutes {
  seo_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  page_title: string;
  seo_description: string;
  body: string;
  url: string;
  crumbs: Crumb[];
  slug: string;
  faqs: any[];
  rating: {
    id: number;
    text: string;
    mark: number;
  }
}
export interface PageMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
export interface PageData {
  id: number;
  attributes: PageAttibutes;
}

export interface Page {
  data: PageData[];
  meta: PageMeta;
}
export interface MenuItem {
  id: number;
  attributes: {
    order: number;
    title: string;
    url: string;
    target: string;
    createdAt: string;
    updatedAt: string;
    children: {
      data: [];
    };
  };
}
export interface Query {
  query: {
    slug: string | null;
  };
}

const Page = ({
  seo_title,
  seo_description,
  page_title,
  body,
  crumbs,
  slug,
  keywords,
  url,
  faqs,
  rating,
  extraLinks
}: PageAttibutes) => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    if (!url) {
      // Redirect to the index page if the page attributes are not found
      router.push('/');
      return null;
    }
  }
  // Эта функция рекурсивно пробегаем по объекту навигации который мы возвращаем из функции getServerSideProps
  // и генерирует одномерный мессив объектов который будет в последующем преобразован в компонент breadcrumbs
  const findAncestors = (obj: any[], url: string) => {
    const ancestors = [] as Crumb[];
    for (const item of obj) {
      if (item.attributes.url === url) {
        ancestors.push({
          id: item.id,
          title: item.attributes.title,
          title_en: item.attributes.title_en,
          title_uk: item.attributes.title_uk,
          url: item.attributes.url,
          children: item.attributes.children.data,
        });
        return ancestors;
      }

      if (item.attributes.children.data.length > 0) {
        const childAncestors = findAncestors(
          item.attributes.children.data,
          url
        );
        if (childAncestors.length > 0) {
          ancestors.push({
            id: item.id,
            title: item.attributes.title,
            title_en: item.attributes.title_en,
            title_uk: item.attributes.title_uk,
            url: item.attributes.url,
            children: item.attributes.children.data,
          });
          ancestors.push(...childAncestors);
          return ancestors;
        }
      }
    }
    return ancestors;
  };

 
  return (
    <>
      {/* 
        head - это компонент который предоставляет нам next.js сюда вы можете прописывать разные мета теги,
        title и тд, если вы хотите добавить стили или скрипты к странице - это лучше делать в файле _document
       */}
      <Head>
        <title>{seo_title}</title>
        <meta name="description" content={seo_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content={keywords} />
        {faqs && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqs }} />
        )}
        {rating && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: rating }} />
        )}
      </Head>

      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <DefaultLayout>
            {/* В компонент hero передаем заголовок страницы и данные которые там будут преобразованы в breadcrumb */}
            <Hero
              title={page_title}
              crumbs={findAncestors(crumbs, `${slug}`)}
            />

            {/* 
              В этом блоке будут помещены и отрендерены все данные из body. Body - это поле в страпи в коллекции Page.
              там вы можете вписывать как обычный текст так и html код
             */}
            <div
              className="cont-body"
              style={{ maxWidth: '90%', margin: '0 auto' }}
            >
              <div dangerouslySetInnerHTML={{ __html: body }}></div>

              <div>
               {
                extraLinks.length ? (
                  <ol itemScope itemType="https://schema.org/BreadcrumbList" style={{margin: '2rem 0 0 0', paddingLeft: '1rem'}}>
                    {
                       extraLinks.map(({text, link, id}) => {
                        return (
                          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" key={id}>
                            <a itemProp="item" href={link}>
                            <span itemProp="name">{text}</span></a>
                            <meta itemProp="position" content="1" />
                          </li>
                        )
                      })
                    }
                  </ol>
                )  : null
               }
              </div>
            </div>
          </DefaultLayout>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query, locale }: Query) {
  try {
    const { NEXT_HOST } = process.env;
    // ИЗ строки браузера получаем url и передаем его константе slug
    // он будет использоваться при обращении к страпи
    const slug = `/${query?.slug}` || '';
    // Выполняем два запроса к страпи - первый для получения основных данных страницы
    // и второй для получения меню
    const res = await server.get(
      `/pages?populate=*&filters[url][$eq]=${slug}&locale=${locale === 'ua' ? 'uk' : locale}`
    );
    const strapiMenu = await server.get(
      `/menus?nested&filters[slug][$eq]=main&populate=*`
    );

    // Из меню которые мы получили вытягиваем только те данные которые нам будут нужны для преобразования
    // json в html
    const crumbs = strapiMenu.data.data[0].attributes.items.data;


    
    const {
      seo_title,
      seo_description,
      page_title,
      url,
      body,
      keywords,
      faqs,
      rating,
      extraLinks
    }: PageAttibutes = res.data?.data[0].attributes;
    
    const generateRatingMicrodata = ():string => {
      if(!rating){return null}
      return `
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "description": "${rating.Text}",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": ${rating.Mark},
          "bestRating": "5",
          "worstRating:" "1",
        },
      }`
    }
    const generateFaqsMicrodata = (): string => {
      if(!faqs || !faqs.data.length){ return null; }
      
      const items = faqs.data.reduce((acc, item) => {
        acc.push({
          "@type": "Question",
          "name": item.attributes.Question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.attributes.Answer
          }
        });
    
        return acc;
      }, []);
    
      const template = `
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ${JSON.stringify(items)}
      }`;
    
      return template;
    };
    


    const generateExtraLinkMicrodata = (): string => {
      if(!extraLink || !extraLink.data.length){ return null; }
      
      const items = extraLink.data.reduce((acc, item) => {
        acc.push({
          "@type": "Question",
          "name": item.attributes.Question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.attributes.Answer
          }
        });
    
        return acc;
      }, []);
    
      const template = `
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ${JSON.stringify(items)}
      }`;
    
      return template;
    };
    
    
    // Удаляем тег srcset
    const bodyWithoutSrcset = body.replace(
      /<img[^>]+srcset=["'][^"']*["'](?:[^>]*)>/g,
      match => {
        return match.replace(/srcset=["'][^"']*["'](?:[^>]*)>/g, '>');
      }
    );

    // Преобразуем ссылки на изображения в абсолютый путь
    const bodyWithAbsoluteURLs = bodyWithoutSrcset.replace(
      /\/uploads\/([^"]+)/g,
      `${NEXT_HOST}/uploads/$1`
    );

    
    return {
      props: {
        seo_title,
        seo_description,
        page_title,
        url,
        body: bodyWithAbsoluteURLs,
        crumbs,
        slug,
        keywords,
        faqs: generateFaqsMicrodata(),
        rating: generateRatingMicrodata(),
        extraLinks,
      },
    };
  } catch (error) {
    console.log(error)
    return {
      props: {
        seo_title: '',
        seo_description: '',
        page_title: '',
        url: '',
        body: '',
        crumbs: '',
        slug: '',
        keywords: '',
        faqs: [],
        rating: null,
        extraLinks
      },
    };
  }
}

export default Page;
