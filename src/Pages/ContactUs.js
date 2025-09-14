import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const ContactUs = () => {
  return (
    <div className="page-contact-us">
      <div className="pb-1 bg-neutral">
        <Navbar />
      </div>
      <div className="page-banner"></div>
      <div className="container price-list">
        <h1 className="text-3xl font-bold py-5 text-primary">Liên hệ</h1>
        <div className="flex flex-col md:items-start md:flex-row mb-10">
          <div className="flex-1">
            <div className="grid grid-rows-3 grid-flow-col gap-2">
              <div>
                <span className="font-bold">Địa chỉ: </span>
                <a
                  href="https://www.google.com/maps/place/Hima+Hair+Salon/@10.8188547,106.6834287,17z/data=!3m1!4b1!4m5!3m4!1s0x317529bee3a818c3:0xdd373efea6f7747d!8m2!3d10.8188547!4d106.6856174"
                  target="_blank"
                  rel="noreferrer"
                >
                  109/8 Lê Lợi, Phường 1, Quận Gò Vấp, TP.HCM
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
              <iframe
                title="map"
                className="gmap_iframe"
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?hl=vi&amp;q=Hima Hair Salon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
