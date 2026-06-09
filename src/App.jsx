import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>       
      <Footer />

    </div>
  )
}

export default App
