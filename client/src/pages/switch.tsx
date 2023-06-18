import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export type TogglePosition = 'left' | 'center' | 'right';

const Switch = () => {
  const router = useRouter();
  const locale = router.locale === 'ua' ? 'uk' : router.locale;
  const [position, setPosition] = useState<TogglePosition>('left');

  const handleClick = (position: TogglePosition) => {
    const locale =
      position === 'left' ? 'ua' : position === 'right' ? 'en' : 'ru';
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    if (locale === 'uk') {
      setPosition('left');
    } else if (locale === 'ru') {
      setPosition('center');
    } else if (locale === 'en') {
      setPosition('right');
    }
  }, [locale]);

  return (
    <div>
      <div className="switch navpart">
        <div className={`switch-options navpart ${position}`}>
          <div
            onClick={() => handleClick('left')}
            className="text-monospace switch-option left navpart"
          >
            UA
          </div>
          <div
            onClick={() => handleClick('center')}
            className="text-monospace switch-option center navpart"
          >
            RU
          </div>
          <div
            onClick={() => handleClick('right')}
            className="text-monospace switch-option right navpart"
          >
            EN
          </div>
        </div>
        <div className={`mover ${position}`}></div>
      </div>
    </div>
  );
};

export default Switch;
