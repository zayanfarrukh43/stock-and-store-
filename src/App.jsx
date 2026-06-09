import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";


const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;