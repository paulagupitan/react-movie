import { Link } from 'react-router-dom';
import NavMain from './NavMain';


const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
        <NavMain />
    </header>
);

Header.defaultProps = {
    title: 'Triomovie'
}

export default Header;