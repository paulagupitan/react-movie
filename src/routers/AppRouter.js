import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalProvider } from '../context/GlobalState';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import IndividualMovie from '../pages/PageFavourites';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <Router>
      <GlobalProvider>
        <div className="wrapper">
          <Header />
          <Nav />
          <Router>
            <Route path="/" exact><PageHome /></Route>
            <Route path="/about"><PageAbout /></Route>
            <Route path="/favourites"><PageFavourites /></Route>
            <Route path="/individualmovie"><IndividualMovie /></Route>
            <Route path="/contact"><PageContact /></Route>
            <Route><PageNotFound /></Route>
          </Router>
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default AppRouter;