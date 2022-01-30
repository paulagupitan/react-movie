import { NavLink } from 'react-router-dom';
import { getYear } from '../utilities/getDates';
import logo from '../images/movie-logo.jpg';

const Footer = () => (
    <footer>
        <NavLink className="logo" to={'/'}><img className="footer-logo" src={logo} alt="Xtramovie logo" /></NavLink>
        <ul className='footer-link'>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/favourites'}>Favourites</NavLink>
            </li>
        </ul>
        <ul className='footer-list'>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Media Center</li>
        </ul>
        <ul className='footer-list'>
            <li>For Educational Purposes</li>
            <li>Megan Cheung</li>
            <li>Judy Gong</li>
            <li>Paul Agupitan</li>
            <li>&copy; {getYear()}</li>
        </ul>
    </footer>
);

export default Footer;
