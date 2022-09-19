import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import GoogleMapReact from "google-map-react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
const GoogleMapMarker = ({ text }) => (
  <div className="flex flex-col">
    <LocationMarkerIcon className="w-8 h-8 marker-icon" />
    <div className="font-bold">{text}</div>
  </div>
);
const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 10.818870688512547,
      lng: 106.68561688033994,
    },
    zoom: 17,
  };

  return (
    <div>
      <div className="pb-1 bg-neutral">
        <Navbar />
      </div>
      <div className="container price-list">
        <h1 className="text-3xl font-bold py-5 text-primary">Liên hệ</h1>
        <div className="flex flex-col md:items-start md:flex-row mb-10">
          <div className="flex-1">
            <div className="grid grid-rows-3 grid-flow-col gap-2">
              <div>
                <span className="font-bold">Địa chỉ: </span>
                <a
                  href="https://www.google.com/maps/dir/10.822499,106.6880844/hima+hair+salon/@10.8206899,106.6848215,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x317529bee3a818c3:0xdd373efea6f7747d!2m2!1d106.6856174!2d10.8188547"
                  target="_blank"
                  rel="noreferrer"
                >
                  109/8 Lê Lợi, Phường 4, Quận Gò Vấp, TP.HCM
                </a>
              </div>
              <div>
                <span className="font-bold">Điện thoại: </span>
                <a href="tel:0903639871">0903639871</a> -{" "}
                <a href="tel:0349322477">0349322477</a>
              </div>
              <div>
                <span className="font-bold">Email: </span>
                <a href="mailto:minhhieu080390@gmail.com">
                  minhhieu080390@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <div className="h-[350px] w-full">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCzlJLI8hljDnCz-NYT2kbxx1cRodAw4sA",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <GoogleMapMarker
                  lat={10.818870688512547}
                  lng={106.68561688033994}
                  text="Hima Hair Salon"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
