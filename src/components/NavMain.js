import { NavLink } from 'react-router-dom';

const NavMain = ({ handleShowHideNav }) => {
    // const location = useLocation();

    function closeNav(e) {
        if (window.innerWidth < 600) {
            handleShowHideNav();
        } else {
            e.target.blur();
        }
    }



    return (

        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>About</NavLink></li>
                <li><NavLink to="/favourites" className={({ isActive }) => (isActive ? 'nav-active' : undefined)}>Favourites</NavLink></li>
            </ul>
        </nav>
    );

};

export default NavMain;