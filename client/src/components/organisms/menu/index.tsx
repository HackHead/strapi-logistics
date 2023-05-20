// @ts-nocheck
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import $t from '@/locale/global';
import Toggler from '@/components/atoms/Toggler';

interface SubmenuState {
  [id: number]: number | null; // хранить id последнего открытого подменю
}


function Menu({ data, show }) {
  const [openSubmenu, setOpenSubmenu] = useState<SubmenuState>({});
  const router = useRouter();
  const locale = router.locale;

  // Эта функция используется для того чтобы открывать и закрывать подменю
  const toggleSubmenu = (parentId: number, id: number) => {
    if (openSubmenu[parentId] === id) {
      // закрыть текущее подменю, если оно уже открыто
      setOpenSubmenu({ ...openSubmenu, [parentId]: null });
    } else {
      // открыть новое подменю
      setOpenSubmenu({ ...openSubmenu, [parentId]: id });
    }
  };
  useEffect(() => {
    const handleClick = event => {
      if (!event.target.classList.contains('navpart')) {
        setOpenSubmenu({});
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      // Clean up the event listener when the component is unmounted
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  const renderMenuItem = (item, parentId: number | null) => {
    if (item?.attributes?.children?.data.length > 0) {
      // проверить, является ли текущий элемент последним открытым подменю на этом уровне вложенности
      const isOpen = openSubmenu[parentId] === item.id;
      return (
        <div
          className="nav-item dropdown"
          key={item.id}
          style={{ position: 'relative' }}
        >
          <span
            className={`nav-link dropdown-toggle navpart`}
            style={{ cursor: 'pointer' }}
            onClick={() => toggleSubmenu(parentId, item.id)}
          >
            {locale === 'ru' ? item.attributes.title  : item.attributes[`title_${locale}`]}
          </span>
          {isOpen && (
            <div
              className="dropdown-menu show"
              style={{ position: 'absolute', right: 0, top: '100%' }}
            >
              {item.attributes.children.data.map(child => (
                <div key={child.id}>{renderMenuItem(child, item.id)}</div>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link
          href={item.attributes.url}
          className={`nav-link navpart`}
          key={item.id}
        >
          {locale === 'ru' ? item.attributes.title  : item.attributes[`title_${locale}`]}
        </Link>
      );
    }
  };

  return (
    <>
    <div
      className={`collapse navbar-collapse navpart ${show ? 'show' : ''}`}
      id="navbarCollapse"
    >
      {!!data && (
        <div className="navbar-nav ms-auto py-0" >
          <Link href="/" className={`nav-item nav-link navpart`}>
            {$t[locale].menu.main}
          </Link>
          {data.map(item => renderMenuItem(item, null))}
          <Link href="/contacts" className={`nav-item nav-link navpart`}>
          {$t[locale].menu.contacts}

          </Link>
          <div className='flex justify-center align-center w-full mx-auto toggler-wrap'><Toggler/></div>
        </div>
      )}
    </div>
    </>
  );
}

export default Menu;
