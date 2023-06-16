import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export type TogglePosition = 'left' | 'center' | 'right';

const Switch = () => {
  const router = useRouter();
  const locale = router.locale;
  const [position, setPosition] = useState<TogglePosition>('left');

  const handleClick = (position: TogglePosition) => {
    const locale =
      position === 'left' ? 'uk' : position === 'right' ? 'en' : 'ru';
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
      <div className="switch">
        <div className={`switch-options ${position}`}>
          <div
            onClick={() => handleClick('left')}
            className="text-monospace switch-option left"
          >
            UA
          </div>
          <div
            onClick={() => handleClick('center')}
            className="text-monospace switch-option center"
          >
            RU
          </div>
          <div
            onClick={() => handleClick('right')}
            className="text-monospace switch-option right"
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
