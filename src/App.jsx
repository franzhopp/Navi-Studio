import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Hompage.jsx";
import Section from "./Components/Section/FirstSection.jsx";
import EthicsPage from "./Components/Ethics/CardsEthics.jsx";
import Services from "./Components/Services/BaseServices.jsx";
import DiscoverWebDeveloper from "./Components/Discover/DiscoverWebDevelopper/WebDevelopper.jsx";
import DiscoverDesigner from "./Components/Discover/DiscoverDesigner/Designer.jsx";
import Portfolio from "./Components/Portfolio/AllProjects/Portfolio.jsx";
import DevisFree from "./Components/Devis/FormDevis.jsx";
import PagePrivacy from "./Components/Privacy/Pages/PagePrivacy.jsx";
import PageConditions from "./Components/Privacy/Pages/PageTerms.jsx";
import PageMentions from "./Components/Privacy/Pages/PageMentions.jsx";
import Loader from "./loading.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 2000);
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<Section />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ethics" element={<EthicsPage />} />
            <Route path="/webdev" element={<DiscoverWebDeveloper />} />
            <Route path="/designer" element={<DiscoverDesigner />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/rate" element={<Rate />} /> */}
            <Route path="/devis" element={<DevisFree />} />
            <Route path="/privacy" element={<PagePrivacy />} />
            <Route path="/terms" element={<PageConditions />} />
            <Route path="/mentions" element={<PageMentions />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
