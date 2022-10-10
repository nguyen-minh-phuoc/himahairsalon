import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import formatFacebookLink from "../../Shared/formatFacebookLink";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import img1 from "../../Assests/Images/Image/ngoc_van.jpg";
import img2 from "../../Assests/Images/Image/minh_chau.jpg";
import img3 from "../../Assests/Images/Image/trang_tong.jpg";
import img4 from "../../Assests/Images/Image/ha_min.jpg";
import img5 from "../../Assests/Images/Image/thao_cao.jpg";
import img6 from "../../Assests/Images/Image/mi_nu.jpg";
import img7 from "../../Assests/Images/Image/nga_tran.jpg";
import img8 from "../../Assests/Images/Image/nhi_nguyen.jpg";
import img9 from "../../Assests/Images/Image/nhi_phan.jpg";
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Ngọc Vân",
      img: img1,
      comment:
        "Anh chị siêu dễ thương thân thiện hoà đồng làm việc có tâm, chu đáo giá cả hợp lý, làm tóc thì trên cả toẹt dờiii 🥰 Sẽ ủng hộ a/c dài dài ạ",
    },
    {
      id: 2,
      name: "Minh Châu",
      img: img2,
      comment:
        "Hai anh chị cắt tóc thân thiện, bao có tâm và chu đáo. Nhuộm thì lên màu đúng theo màu mk thích. Giá cả rất hợp lý ko kê giá. Luôn ủng hộ ạh!❤️❤️❤️",
    },
    {
      id: 3,
      name: "Trang Tong",
      img: img3,
      comment:
        "Lâu lắm rồi mới làm đc cái đầu ưng ý vậy nè. Chủ tiệm cực dễ thương và có tâm nhé mn ơi 🥰",
    },
    {
      id: 4,
      name: "Ha Min",
      img: img4,
      comment:
        "Anh chủ thân thiện, tư vấn có tâm. Không vẽ vời thêm các chi phí khác. Màu tóc nhuộm đúng như mình thích, tóc mềm mượt nữa chớ. ❤️❤️ Sẽ tiếp tục đến ủng hộ.",
    },
    {
      id: 5,
      name: "Thao Cao",
      img: img5,
      comment:
        "Quá xuất sắc, nhiệt tình làm tóc đẹp. Quan trọng là thoáng mát nữa, ghé ngay đi chị em ới hehe.",
    },
    {
      id: 6,
      name: "Mi Nu",
      img: img6,
      comment:
        "Hôm nay mình đến uốn tóc và kết quả ngoài mong đợi vì sự mượt mà xinh đẹp của tóc mình và mình sẽ ủng hộ nhiều nhiều 🥰 100 điểm chất lượng và 200 điểm...",
    },
    {
      id: 7,
      name: "Nga Tran",
      img: img7,
      comment:
        "Hima làm tóc rất có tâm, thuốc tốt, làm tóc đẹp mà nhân viên gội đầu lại cực đã nữa nek. Mình sẽ đến đây thường xuyên luôn🥰",
    },
    {
      id: 8,
      name: "Nhi Nguyen",
      img: img8,
      comment:
        "Nhân viên dễ thương lịch sự, không gian thoải mái, làm tóc đẹp giá phải chăng, chưa bao giờ ưng ý đến vậy ❤️❤️❤️❤️👍👍👍",
    },
    {
      id: 9,
      name: "Phan Yến Nhi",
      img: img9,
      comment:
        "Nhân viên thân thiên , anh chủ thì bao tận tình và dễ thương luôn nha . Mọi người hay đến và trải nghiệm đảm bảo sẽ ưng ý ngay lần đầu tiên luôn nhé . ☺️☺️",
    },
  ];
  

  return (
    <div className="bg-base-100 py-20 px-4">
      <h2 className="mb-16 text-center text-[30px] font-bold text-accent">
        <span className="text-primary">Trải Nghiệm</span> của Khách Hàng
      </h2>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            820: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-[340px]"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <div className="p-5 rounded-xl w-auto md:w-[370px] min-h-[270px] mx-auto bg-secondary relative">
                <div className="flex items-center gap-5">
                  <img src={r.img} className="w-16 h-16 rounded-full" alt="" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {r.name}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">{r.comment}</p>
                <div className="rating absolute left-[20px] bottom-[25px]">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() =>
            window.open(
              formatFacebookLink("https://www.facebook.com/salonHimahair/reviews",100063613957040),
              "_blank"
            )
          }
          className="px-8 mt-12 block mx-auto  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white"
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
