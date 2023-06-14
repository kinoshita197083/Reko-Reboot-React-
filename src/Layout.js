import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { navlinks } from "./Components/Navbar/navlinks";
import NavItem from "./Components/Navbar/NavItems/NavItems";

const Layout = () => {

    return (
        <main className="App">
            <div />
            <Navbar>
                {navlinks.map((link) => {
                    return (
                        <NavItem
                            icon={link.icon}
                            page={link.page}
                            type={link.type}
                            key={link.id}
                        />
                    )
                })}
            </Navbar>
            <Outlet />
        </main>
    );
}

export default Layout;