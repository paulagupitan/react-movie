import { NavLink, useLocation } from 'react-router-dom';

function NavSort() {

    const location = useLocation();

    return (
        <nav className="nav-container">
            <ul className="nav-sort">
                <li><NavLink to='/sort/popular' className={({ isActive }) => (isActive || location.pathname === '/' ? 'sort-active' : undefined)}>Popular</NavLink></li>
                <li><NavLink to='/sort/top-rated' className={({ isActive }) => (isActive ? 'sort-active' : undefined)}>Top Rated</NavLink></li>
                <li><NavLink to='/sort/now-playing' className={({ isActive }) => (isActive ? 'sort-active' : undefined)}>Now Playing</NavLink></li>
                <li><NavLink to='/sort/upcoming' className={({ isActive }) => (isActive ? 'sort-active' : undefined)}>Upcoming</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavSort