import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export type TogglerPosition = 'left' | 'center' | 'right';

const Toggler = () => {
  const [pos, setPos] = useState<TogglerPosition>();
  const router = useRouter();
  const locale = router.locale === 'ua' ? 'uk' : router.locale;

  useEffect(() => {
    if (locale === 'ua') {
      setPos('left');
    } else if (locale === 'ru') {
      setPos('center');
    } else if (locale === 'en') {
      setPos('right');
    }
  }, [locale]);

  const handleLocaleChange = (selectedLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <>
      <div className="toggler-container">
        <div className={`switcher ${pos}`}></div>
        <button
          className={locale === 'ua' ? 'active' : ''}
          onClick={() => handleLocaleChange('ua')}
        >
          UA
        </button>
        <button
          className={locale === 'ru' ? 'active' : ''}
          onClick={() => handleLocaleChange('ru')}
        >
          RU
        </button>
        <button
          className={locale === 'en' ? 'active' : ''}
          onClick={() => handleLocaleChange('en')}
        >
          EN
        </button>
      </div>
    </>
  );
};

export default Toggler;
