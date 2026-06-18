import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

import products from "./data/json/hospitalFurniture.json";
import ProductDetails from "./ProductDetails"
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
     <Header/>

      {/* Main content wrapper */}
      <div style={{ paddingTop: "70px" }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

           <Route
             path="/products"
             element={<Products products={products} />}
            />

            <Route
  path="/product/:id"
  element={<ProductDetails products={products} />}
/>

        </Routes>
        <Footer />
        <WhatsAppButton/>
         <Navbar />

      </div>
    </>
  );
}

export default App;