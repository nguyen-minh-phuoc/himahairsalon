import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home/Home";
import PriceList from "./Pages/PriceList";
import Products from "./Pages/Products";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="san-pham" element={<Products></Products>}></Route>
          <Route path="bang-gia" element={<PriceList></PriceList>}></Route>
          <Route path="lien-he" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
