import { NavLink } from 'react-router-dom';

const NavMain = () => (
    <nav className="nav-main">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul>
    </nav>
);

export default NavMain;