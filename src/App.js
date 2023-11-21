import React from "react";
import "./styles/global.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Commission from "./pages/Commission";
import LoadGivers from "./pages/LoadGivers";
import Carriers from "./pages/Carriers";
import Cooperative from "./pages/Cooperative";
import AboutUs from "./pages/AboutUs";
import FastOffer from "./pages/fastOffer";
import ExpeditionCost from "./pages/ExpeditionCost";
import SectoralNewsPage from "./pages/sectoralNewsPage";
import News from "./pages/news";
import NotFound from "./pages/notFound";
import SuccessPage from "./pages/successPage";
import HomeTransport from "./pages/homeTransport";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <header className="AppNav">
            <Header />
          </header>
          <section className="AppList">
            <Routes>
              <Route path="/" element={<LandingPage />} />

              <Route path="/komisyon" element={<Commission />} />

              <Route path="/yuk-verenler" element={<LoadGivers />} />

              <Route path="/tasiyicilar" element={<Carriers />} />

              <Route path="/kooperatifler" element={<Cooperative />} />

              <Route path="/hakkimizda" element={<AboutUs />} />

              <Route path="/hizli-teklif" element={<FastOffer />} />

              <Route
                path="/evden-eve-nakliyeciler"
                element={<HomeTransport />}
              />

              <Route path="/sefer-maliyeti" element={<ExpeditionCost />} />

              <Route path="/sektorel-haberler" element={<SectoralNewsPage />} />

              <Route path="/haber/:id" element={<News />} />

              <Route path="*" element={<NotFound />} />

              <Route path="/hizli-teklif-basari" element={<SuccessPage />} />
            </Routes>
          </section>
          <footer className="AppFooter">
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
};

export default App;
