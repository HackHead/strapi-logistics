// @ts-nocheck

import { useEffect } from 'react';
import { useState } from 'react';
import { server } from '@/http';
import Menu from '../menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchModal from '../search-modal';

interface SubmenuItem {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    url: string;
  };
}
interface MenuItem {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    url: string;
    children: {
      data: SubmenuItem[];
    };
  };
}
interface Menu {
  data: MenuItem;
}

const Header = () => {
  const [menus, setMenus] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const fetchMenus = async () => {
    try {
      const res = await server.get(
        '/menus?nested&filters[slug][$eq]=main&populate=*'
      );
      setMenus(res.data.data[0]?.attributes?.items.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);
  return (
    <nav className="navbar navbar-expand-xl navbar-light ">
      <Link href="/" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-server me-3"></i>GreenHost
        </h1>
      </Link>
      <button
        className="navbar-toggler navpart"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="fa fa-bars navpart"></span>
      </button>
      <Menu
        data={menus}
        show={showMenu}
        onTog={() => {
          setShowMenu(false);
        }}
      />
      <SearchModal onClose={() => setShowModal(false)} show={showModal}/>
      <button type="button" className="btn text-secondary ms-3" onClick={() => setShowModal(!showModal)}><i className="fa fa-search"></i></button>
    </nav>
  );
};

export default Header;
