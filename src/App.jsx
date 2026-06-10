import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";
import OurStores from "./Pages/OurStores";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<OurStores />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;