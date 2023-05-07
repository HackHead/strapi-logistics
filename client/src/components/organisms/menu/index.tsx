// @ts-nocheck
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface SubmenuState {
  [id: number]: number | null; // хранить id последнего открытого подменю
}

function Menu({ data, show }) {
  const [openSubmenu, setOpenSubmenu] = useState<SubmenuState>({});

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
   
  const renderMenuItem = (item, parentId: number | null) => {
    if (item?.attributes?.children?.data.length > 0) {
      
      // проверить, является ли текущий элемент последним открытым подменю на этом уровне вложенности
      const isOpen = openSubmenu[parentId] === item.id;
      return (
        <div className="nav-item dropdown" key={item.id} style={{ position: "relative" }}>
          <span
            className={`nav-link dropdown-toggle`}
            style={{ cursor: "pointer" }}
            onClick={() => toggleSubmenu(parentId, item.id)}
          >
            {item.attributes.title}
          </span>
          {isOpen && (
            <div
              className="dropdown-menu m-0 show"
              style={{ position: "absolute", right: 0, top: "100%" }}
            >
              {item.attributes.children.data.map((child) => (
                <div key={child.id}>{renderMenuItem(child, item.id)}</div>
              ))}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Link href={item.attributes.url} className={`nav-link`} key={item.id}>
          {item.attributes.title}
        </Link>
      );
    }
  };

  return (
    <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarCollapse">
      {
        Object.keys(data).length &&
          <div className="navbar-nav ms-auto py-0">
            <Link href="/" className={`nav-item nav-link`} >
              Главная
            </Link>
            {data.map((item) => renderMenuItem(item, null))}
            <Link href="/contacts" className={`nav-item nav-link`}>
              Контакты
            </Link>
          </div>
      } 
      
    </div>
  );
}

export default Menu;
