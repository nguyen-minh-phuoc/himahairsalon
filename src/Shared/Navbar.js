import React, { useState } from "react";
import { MenuAlt1Icon, MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/Images/Image/logo6.png";
import CustomLink from "./CustomLink";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const gaEventTracker = useAnalyticsEventTracker("Navbar");
  const callUs = () => {
    gaEventTracker("Call Us", "Consult");
    window.location = "tel://0903639871";
  };

  return (
    <div>
      <nav className="container ">
        <div className="flex items-center py-3 ">
          <div className=" flex items-center text-white font-bold text-2xl">
            {pathname.includes("/dashboard") && (
              <label
                htmlFor="my-drawer-2"
                tabIndex="0"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <MenuAlt3Icon className="w-8 h-8 text-accent"></MenuAlt3Icon>
              </label>
            )}

            <img
              onClick={() => navigate("/")}
              src={logo}
              className="h-[60px] cursor-pointer"
              alt=""
            />
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon
                className={`w-10 h-10 absolute right-3 top-[12px]  cursor-pointer md:hidden`}
              ></MenuAlt1Icon>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col  md:items-center  p-4 md:p-0 rounded-b-lg  md:flex-row justify-end  transition-all duration-500 ease-in-out  absolute md:static   md:z-auto z-[20] right-0 w-full  space-y-2 md:space-y-0 ${
              open
                ? "top-16 opacity-100 bg-white md:bg-transparent transition-all ease-out"
                : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
            }`}
          >
            <CustomLink to="/" className=" px-5 text-accent rounded py-1   ">
              Trang chủ
            </CustomLink>
            <CustomLink
              to="/bang-gia"
              className=" px-5 text-accent rounded py-1   "
            >
              Bảng giá
            </CustomLink>
            {/* <CustomLink
              to="/san-pham"
              className=" px-5 text-accent rounded py-1   "
            >
              Sản phẩm
            </CustomLink> */}
            <CustomLink
              to="/hinh-anh"
              className=" px-5 text-accent rounded py-1   "
            >
              Hình ảnh
            </CustomLink>
            <CustomLink
              to="/lien-he"
              className=" px-5 text-accent rounded py-1   "
            >
              Liên hệ
            </CustomLink>
            <button
              className="px-5 font-semibold rounded py-2 flex items-center justify-center bg-primary text-white"
              onClick={() => callUs()}
            >
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
