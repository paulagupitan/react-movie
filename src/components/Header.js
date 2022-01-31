import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import logo from '../images/movie-logo.jpg';


const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header className={navOpen ? 'show' : undefined}>
           <Link className="logo" to={'/'}><img className="header-logo" src={logo} alt="Xtramovie logo" /></Link>
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <NavMain handleShowHideNav={showHideNav} />
        </header>
    );

};

export default Header;