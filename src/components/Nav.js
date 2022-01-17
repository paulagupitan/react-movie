import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul>
            <li><NavLink className="router" to="/" exact>Home</NavLink></li>
            <li><NavLink className="router" to="/about">About</NavLink></li>
            <li><NavLink className="router" to="/favourites">Favourites</NavLink></li>
        </ul>
    </nav>
);

export default Nav;