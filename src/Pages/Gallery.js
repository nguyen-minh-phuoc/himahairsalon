import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Gallery = () => {
  return (
    <div className="page-gallery">
      <div className="pb-1 bg-neutral">
        <Navbar />
      </div>
      <div className="page-banner"></div>
      <div className="container price-list">
        <h1 className="text-3xl font-bold py-5 text-primary">Thư viện ảnh</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
