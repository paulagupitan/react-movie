import Movies from '../components/Movies';


function PageHome() {
    return (
        <main>
            <section>
                <h2>Home</h2>
                <p>This app was created with love ❤️ by Snowball. 😎...</p>
            </section>
            <section>
                <Movies />
            </section>
        </main>
    );
}

export default PageHome;