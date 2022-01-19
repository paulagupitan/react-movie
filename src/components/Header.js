import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import logo from '../images/movie-logo.jpg';




const Header = ({ title }) => (
    <header>
        <Link className="logo" to={'/'}><img className="header-logo" src={logo} alt="Logo" /></Link>
        {/* <h1><Link to="/">{title}</Link></h1> */}
        <NavMain />
    </header>

);

Header.defaultProps = {
    title: 'Triomovie'
}

export default Header;