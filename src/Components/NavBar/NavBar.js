import { NavLink, useLocation } from "react-router-dom";
import aron from '../../image/aron-transparent.png';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="navigation-bar">
            <ul className="navigation-ul">
                <li className="NavLink">
                    <NavLink to="/" className="log">
                        {location.pathname === '/' ? 'COUNTRY' : ' <  BACK ' }
                    </NavLink>
                </li>
            </ul>

            <div className="logo-div">
                <img className="ar-img" src={aron} alt="world" />
                <p className="logo-p">Where in the world?</p>
            </div>
        </nav>
    );
}

export default NavBar;