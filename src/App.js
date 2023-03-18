import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import PriceList from "./Pages/PriceList";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import Wrapper from "./Wrapper";
import ReactGA from "react-ga";
const TRACKING_ID = "G-X2L7XS6RWH"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="hinh-anh" element={<Gallery></Gallery>}></Route>
          <Route path="san-pham" element={<Products></Products>}></Route>
          <Route path="bang-gia" element={<PriceList></PriceList>}></Route>
          <Route path="lien-he" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
