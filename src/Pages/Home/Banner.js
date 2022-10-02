import React from "react";
import headerImg from "../../Assests/Images/Image/header.png";
import headerImg2 from "../../Assests/Images/Image/home.jpg";
import Navbar from "../../Shared/Navbar";
const Banner = () => {
  return (
    <div className="pb-3 bg-neutral">
      <Navbar></Navbar>
      <div className="flex items-center  flex-col flex-col-reverse lg:flex-row justify-center h-full lg:h-[475px]  container">
        <div className="mt-5 text-center lg:text-left lg:mt-0 lg:flex-1">
          <div className="space-y-2 lg:mt-0 md:mt-5   md:space-y-3">
            <h1 className="text-hima text-3xl lg:text-5xl font-bold">
              HIMA HAIR SALON
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-[#111430]">
              Chuyên Tạo Mẫu Tóc Nữ
            </h2>
          </div>
          <p className="text-gray-500 w-5/6 md:w-6/8 mx-auto lg:mx-0 mt-4 md:mt-6">
            Chào mừng bạn đến với Hima Hair Salon. Với nhiều năm kinh nghiệm
            trong lĩnh vực tạo mẫu và chăm sóc tóc, chúng tôi cam kết sẽ mang
            đến cho bạn những trải nghiệm và dịch vụ tốt nhất với chi phí hợp lý
            nhất.
          </p>
          <button className="px-8 my-4 md:my-7 rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white">
            Gọi đặt lịch
          </button>
        </div>
        <div className="flex-1">
          <img
            className="lg:h-[400px] md:h-[380px] h-[300px] block rounded-full mx-auto"
            src={headerImg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
