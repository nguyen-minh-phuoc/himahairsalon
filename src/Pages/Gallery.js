import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Import all gallery images
import img0038 from "../Assets/Images/Gallery/IMG_0038.jpeg";
import img0682 from "../Assets/Images/Gallery/IMG_0682.jpeg";
import img0719 from "../Assets/Images/Gallery/IMG_0719.jpeg";
import img0730 from "../Assets/Images/Gallery/IMG_0730.jpeg";
import img0944 from "../Assets/Images/Gallery/IMG_0944.jpeg";
import img0950 from "../Assets/Images/Gallery/IMG_0950.jpeg";
import img0952 from "../Assets/Images/Gallery/IMG_0952.jpeg";
import img0955 from "../Assets/Images/Gallery/IMG_0955.jpeg";
import img2544 from "../Assets/Images/Gallery/IMG_2544.jpeg";
import img5074 from "../Assets/Images/Gallery/IMG_5074.jpeg";
import img5075 from "../Assets/Images/Gallery/IMG_5075.jpeg";
import img5129 from "../Assets/Images/Gallery/IMG_5129.jpeg";
import img5187 from "../Assets/Images/Gallery/IMG_5187.jpeg";
import img6599 from "../Assets/Images/Gallery/IMG_6599.jpeg";
import img7032 from "../Assets/Images/Gallery/IMG_7052.jpeg";
import img7078 from "../Assets/Images/Gallery/IMG_7078.jpeg";
import img9576 from "../Assets/Images/Gallery/IMG_9576.jpeg";

const galleryImages = [
  { src: img9576, alt: "Hima Hair Salon" },
  { src: img0038, alt: "Hima Hair Salon" },
  { src: img0682, alt: "Hima Hair Salon" },
  { src: img0719, alt: "Hima Hair Salon" },
  { src: img0730, alt: "Hima Hair Salon" },
  { src: img0944, alt: "Hima Hair Salon" },
  { src: img0950, alt: "Hima Hair Salon" },
  { src: img0952, alt: "Hima Hair Salon" },
  { src: img0955, alt: "Hima Hair Salon" },
  { src: img2544, alt: "Hima Hair Salon" },
  { src: img5074, alt: "Hima Hair Salon" },
  { src: img5075, alt: "Hima Hair Salon" },
  { src: img5129, alt: "Hima Hair Salon" },
  { src: img5187, alt: "Hima Hair Salon" },
  { src: img6599, alt: "Hima Hair Salon" },
  { src: img7032, alt: "Hima Hair Salon" },
  { src: img7078, alt: "Hima Hair Salon" },
];

const Gallery = React.memo(() => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="page-gallery">
      <div className="pb-1 bg-neutral">
        <Navbar />
      </div>
      <div className="page-banner"></div>
      <div className="container">
        <h1 className="text-3xl font-bold py-5 text-primary">Thư viện ảnh</h1>
        <div className="gallery-container">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {galleryImages.map((image, index) => (
              <a key={index} className="gallery-item" href={image.src}>
                <img
                  alt={image.alt}
                  src={image.src}
                  className="w-full aspect-square object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default Gallery;
