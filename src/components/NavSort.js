import { NavLink } from 'react-router-dom';

function NavSort() {
    return (
        <nav className="nav-container">
            <ul className="nav-sort">
                {/* How do we get the / page to have popular underlined when the page first loads? (since the link is not /sort/popular, it's just /) */}
                <li><NavLink to='/sort/popular' className={({ isActive }) => (isActive && 'sort-active')}>Popular</NavLink></li>
                <li><NavLink to='/sort/top-rated' className={({ isActive }) => (isActive && 'sort-active')}>Top Rated</NavLink></li>
                <li><NavLink to='/sort/now-playing' className={({ isActive }) => (isActive && 'sort-active')}>Now Playing</NavLink></li>
                <li><NavLink to='/sort/upcoming' className={({ isActive }) => (isActive && 'sort-active')}>Upcoming</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavSort