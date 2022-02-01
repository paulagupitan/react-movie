import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFavs } from "../utilities/storage";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import IndividualMovie from '../pages/IndividualMovie';
import PageSearch from '../pages/PageSearch';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {

  const [favourites, setFavourites] = useState(getFavs())

  useEffect(() => {
    localStorage.setItem('faved', JSON.stringify(favourites))
  }, [favourites])

  return (
    <div className="wrapper">

      <BrowserRouter basename="xtramovie">
        <Header />
        <Routes>
          <Route path="/" element={<PageHome sort="popular" />} />
          <Route path="/sort/popular" element={<PageHome sort="popular" />} />
          <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
          <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
          <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourites" element={<PageFavourites favourites={favourites} setFavourites={setFavourites} />}></Route>
          <Route path="/movie/:id" element={<IndividualMovie favourites={favourites} setFavourites={setFavourites} />}></Route>
          <Route path="/search/:query" element={<PageSearch />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default AppRouter;