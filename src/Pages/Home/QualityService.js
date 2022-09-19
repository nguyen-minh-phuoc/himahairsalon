import React from "react";
import haircut from "../../Assests/Images/Image/haircut.jpg";
const QualityService = () => {
  return (
    <div className="py-16 bg-neutral">
      <div className="container ">
        <div className="flex flex-col md:items-start md:flex-row mb-10">
          <div className="flex-1 md:pr-6">
            <img
              src={haircut}
              alt=""
              className="w-full md:w-[100%] w-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 mt-4">
            <div className=" lg:pl-24 ">
              <h2 className="text-[30px] font-bold mb-5">
                <p>
                  <span className="text-primary">Uy Tín - Chất Lượng</span>
                </p>{" "}
              </h2>
              <p className=" text-[18px] text-gray-500 font-light">
                Với phương châm{" "}
                <i>chất lượng hơn số lượng, uy tín tạo nên thương hiệu</i> Hima
                luôn mong muốn mang đến cho các bạn sự uy tín và chất lượng
                trong từng sản phẩm và dịch vụ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityService;
