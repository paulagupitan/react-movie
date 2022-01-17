
const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
);

Header.defaultProps = {
    title: 'Triomovie'
}

export default Header;