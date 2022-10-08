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
                  <span className="text-primary">Chất lượng </span>hơn số lượng
                </p>{" "}
              </h2>
              <p className="text-[18px] text-gray-500 font-light">
                Hima Hair Salon kinh doanh theo mô hình gia đình với phương châm
                "chất lượng hơn số lượng, uy tín tạo nên thương hiệu" cùng với
                tiêu chí :
              </p>
              <ul className="quality-list text-[18px] text-gray-500 font-light mt-3">
                <li>Giá cả niêm yết rõ ràng</li>
                <li>Thường xuyên có các chương trình khuyến mãi tặng kèm</li>
                <li>Không cần phục hồi tóc trước khi sử dụng dịch vụ</li>
                <li>
                  Tư vấn và giải thích chi tiết cho khách về tình trạng của tóc
                </li>
                <li>
                  Sản phẩm chính hãng nhập nước ngoài, khách hàng có thể đồng
                  kiểm tra trước khi làm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityService;
