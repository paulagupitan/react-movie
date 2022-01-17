import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GlobalProvider } from '../context/GlobalState';
import Header from '../components/Header';
// import { appTitle, appAuthor } from '../globals/globalVariables';
import NavMain from '../components/NavMain';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import IndividualMovie from '../pages/IndividualMovie';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    // <GlobalProvider>
    <div className="wrapper">
      
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/favourites" element={<PageFavourites />}></Route>
          <Route path="/individualmovie" element={<IndividualMovie />}></Route>
          <Route path="/contact" element={<PageContact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
       

   
    </div>
    // </GlobalProvider>
  );
}

export default AppRouter;