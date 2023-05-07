import { useEffect } from "react";
import { useState } from "react";
import { server } from "@/http";
import Menu from "../menu";

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
interface Menu  {
    data: MenuItem;
}
  
const Header = () => {
    const [menus, setMenus] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    const fetchMenus = async () => {
        try {
            const res = await server.get('/menus/1?nested&populate=*');
    
            setMenus(res.data.data?.attributes?.items.data);
        } catch (error) {
            console.log(error)
            throw new Error(`Во время получения навигации произошла ошибка: ${error}`)
        }
    }
    
    useEffect(() => {
        fetchMenus();
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-server me-3"></i>GreenHost</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={() => setShowMenu(!showMenu)}>
                <span className="fa fa-bars"></span>
            </button>
            
            <Menu data={menus} show={showMenu}/>
        </nav>
    )
}

export default Header;