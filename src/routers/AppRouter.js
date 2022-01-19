import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GlobalProvider } from '../context/GlobalState';
import Header from '../components/Header';
// import { appTitle, appAuthor } from '../globals/globalVariables';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import IndividualMovie from '../pages/IndividualMovie';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';
// import Sidebar from "../components/Sidebar";

function AppRouter() {
  return (
    <div className="wrapper">

      <BrowserRouter>
        <Header />
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/" element={<PageHome sort="popular" />} />
          <Route path="/sort/popular" element={<PageHome sort="popular" />} />
          <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
          <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
          <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourites" element={<PageFavourites />}></Route>
          <Route path="/movie/:id" element={<IndividualMovie />}></Route>
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default AppRouter;