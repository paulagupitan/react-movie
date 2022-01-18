import { NavLink } from 'react-router-dom';

const NavMain = () => (
    <nav className='nav-first'>
        <ul className="nav-main">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul>
    </nav>
);

export default NavMain;