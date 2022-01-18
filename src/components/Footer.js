import { getYear } from '../utilities/getDates';
import { NavLink } from 'react-router-dom';
import logo from '../images/movie-logo.jpg';

const Footer = () => (
    <footer>
        <NavLink className="logo" to={'/'}><img className="footer-logo" src={logo} alt="Logo" /></NavLink>
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
        <div>
            <p>For Educational Purpose</p>
            <p>Megan Cheung - Judy Gong - Paul Agupitan copyright 2022</p>
        </div>
    </footer>
);

Footer.defaultProps = {
    author: 'Awesome Corp.',
    copyright: getYear()
}

export default Footer;
