import React from "react";
import formatFacebookLink from "./formatFacebookLink";
import mapIcon from "../Assets/Images/Icon/map-pin-2-fill.png";
import clockIcon from "../Assets/Images/Icon/clock.png";
import img1 from "../Assets/Images/Icon/Vector-1.png";
import img2 from "../Assets/Images/Icon/tiktok.png";
// import img3 from "../Assets/Images/Icon/Vector-3.png";
import img4 from "../Assets/Images/Icon/Vector.png";
import {} from "@heroicons/react/solid";
const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <footer className="footer pt-10 pb-16  md:pt-14 md:pb-24 container">
        <div>
          <div className="flex items-start">
            <img className="w-6 h-6 mt-1" src={mapIcon} alt="" />
            <p className="ml-2">
              <a
                href="https://www.google.com/maps/place/Hima+Hair+Salon/@10.8187711,106.6856969,15z/data=!4m2!3m1!1s0x0:0xdd373efea6f7747d?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                109/8 Lê Lợi, Phường 4, Quận Gò Vấp
                <br /> TP. Hồ Chí Minh
              </a>
            </p>
          </div>
          <div className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <a href="tel:0903639871" className="ml-3 mt-1">
              <span>0903.639.871</span>
            </a>
            <span className="ml-2 mt-1">-</span>
            <a href="tel:0349322477" className="ml-2 mt-1">
              <span>0349.322.477</span>
            </a>
          </div>
        </div>
        <div>
          <div className="flex gap-6 mt-2">
            <a
              href={formatFacebookLink(
                "https://www.facebook.com/salonHimahair",
                100063613957040
              )}
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-6 h-6" src={img4} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/hima_hair_salon"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-6 h-6" src={img1} alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@hima.hairsalon"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-6 h-6" src={img2} alt="Tiktok" />
            </a>
            {/* <a
              href="https://www.tiktok.com/@hima.hairsalon"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-6 h-6" src={img3} alt="Youtube" />
            </a> */}
          </div>
          <div className="flex items-start mt-[10px]">
            <img className="w-[24px] h-[24px] mt-1" src={clockIcon} alt="" />
            <p className="ml-3 mt-[6px]">8 AM - 8 PM</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
