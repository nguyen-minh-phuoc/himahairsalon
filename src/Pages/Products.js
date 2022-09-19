import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import CustomLink from "../Shared/CustomLink";
import {
  ChatAltIcon,
  ClipboardListIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";
const Products = () => {
  return (
    <div className="pb-1">
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="container">
          <h1 className="text-3xl font-bold py-5 text-primary">Liên hệ</h1>
          <div>
            <div className="drawer drawer-mobile font-poppins">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content "></div>
              <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 lg:w-60  bg-secondary lg:bg-white text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li>
                    <CustomLink
                      to="/dashboard/guide"
                      className="flex items-center"
                    >
                      {" "}
                      <SpeakerphoneIcon className="mr-2 w-6 h-6" /> Guide{" "}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      to="/dashboard/bookinglist"
                      className="flex items-center"
                    >
                      {" "}
                      <ClipboardListIcon className="mr-2 w-6 h-6" /> Booking
                      List{" "}
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      to="/dashboard/review"
                      className="flex items-center"
                    >
                      {" "}
                      <ChatAltIcon className="mr-2 w-6 h-6" /> Review{" "}
                    </CustomLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
