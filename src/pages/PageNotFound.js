import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageNotFound() {

    useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);

    return (
        <main>
            <section className="page-not-found">
                <div className="pnf-info">
                    <h2>Page not Found</h2>
                    <p>Oops, there is nothing here!</p>
                </div>
            </section>
        </main>
    );
}



export default PageNotFound;
