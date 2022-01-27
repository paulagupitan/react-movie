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
        <div className='footer-info'>
            <p>For Educational Purposes</p>
            <ul className='footer-list'>
                <li>Megan Cheung</li>
                <li>Judy Gong</li>
                <li>Paul Agupitan</li>
            </ul>
            <p>&copy; {getYear()}</p>
        </div>
    </footer>
);

Footer.defaultProps = {
    author: 'Awesome Corp.',
    copyright: getYear()
}

export default Footer;
