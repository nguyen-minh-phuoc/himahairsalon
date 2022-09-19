import React from "react";
import mapIcon from "../Assests/Images/Icon/map-pin-2-fill.png";
import clockIcon from "../Assests/Images/Icon/clock.png";
import img1 from "../Assests/Images/Icon/Vector-1.png";
import img2 from "../Assests/Images/Icon/Vector-2.png";
import img3 from "../Assests/Images/Icon/Vector-3.png";
import img4 from "../Assests/Images/Icon/Vector.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <footer className="footer pt-10 pb-16  md:pt-14 md:pb-24 container">
        <div>
          <div className="flex items-start">
            <img className="w-6 h-6 mt-1" src={mapIcon} alt="" />
            <p className="ml-2">
              109/8 Lê Lợi, Phường 4, Quận Gò Vấp
              <br /> TP. Hồ Chí Minh
            </p>
          </div>
          <div  className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <a href="tel:0903639871"  className="ml-3 mt-1">
                <span>0903.639.871</span>
              </a>
          </div>
         
        </div>        
        <div>
          <div className="flex gap-6 mt-2">
            <img className="w-6 h-6" src={img1} alt="" />
            <img className="w-6 h-6" src={img2} alt="" />
            <img className="w-6 h-6" src={img3} alt="" />
            <img className="w-6 h-6" src={img4} alt="" />
          </div>
          <div className="flex items-start mt-[10px]">
            <img className="w-[24px] h-[24px] mt-1" src={clockIcon} alt="" />
            <p className="ml-3 mt-[6px]">
              8 AM - 8 PM
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
