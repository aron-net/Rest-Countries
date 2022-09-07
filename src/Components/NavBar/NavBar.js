import { NavLink, useLocation } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navigation-bar">
            <ul className="navigation-ul">
                <li className="NavLink">
                    <NavLink to="/" className="log">
                        {location.pathname === '/' ? 'COUNTRY' : '<BACK' }
                    </NavLink>
                </li>
            </ul>
            <div className="logo-div">
                <p className="logo-p">Where in the world?</p>
            </div>
        </nav>
    );
}

export default NavBar;