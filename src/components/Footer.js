import { getYear } from '../utilities/getDates';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer>
        {/* <NavLink className="logo" to={'/'}/> */}
        <ul>
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
        <ul>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Media Center</li>
        </ul>
        <div>
            <p>For Educational Purpose</p>
            <p>Megan Cheung - Judy Gong - Paul Agupitan &copy 2022</p>
        </div>
    </footer>
);

Footer.defaultProps = {
    author: 'Awesome Corp.',
    copyright: getYear()
}

export default Footer;
