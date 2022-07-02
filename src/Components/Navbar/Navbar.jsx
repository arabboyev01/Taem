import { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const collapsemenu = function () {
        setMenu(menu === false ? true : false);
    }


    return (
        <section id="navbar">
            <nav>
                <div className="logo">
                    <h2>TEam</h2>
                </div>
                <div className="hamburger-menu">
                    < MenuOpenIcon onClick={collapsemenu} />
                </div>
                <div className="collapsed">
                    <ul className={`navbar-nav ${menu ? 'is-expended' : ''}`}>
                        <li className="nav-item">
                            <NavLink to="/" activeClass="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink to="/about" className="nav-link" activeClass="active">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/service" className="nav-link" activeClass="active">
                                 Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link" activeClass="active">
                                 Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link" activeClass="active">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/faq" className="nav-link" activeClass="active">
                                FAQ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}