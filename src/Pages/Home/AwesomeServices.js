import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper";
import img1 from "../../Assets/Images/Icon/cat.png";
import img2 from "../../Assets/Images/Icon/nhuom.png";
import img3 from "../../Assets/Images/Icon/uon.png";
import img4 from "../../Assets/Images/Icon/duoi.png";
import img5 from "../../Assets/Images/Icon/goi.png";
import Service from "./Service";
import { useNavigate } from "react-router-dom";

const AwesomeServices = () => {
  // const [services,setServices]=useState([])
  // useEffect(() => {
  //   fetch('http://localhost:4000/services').then(res=>res.json()).then(data=>setServices(data))
  // },[])
  const navigate = useNavigate();
  const services = [
    {
      id: 1,

      name: "Cắt",

      img: img1,

      price: 150,

      description: "",
    },
    {
      id: 2,

      name: "Nhuộm",

      img: img2,

      price: 600,

      description: "",
    },
    {
      id: 3,

      name: "Uốn",

      img: img3,

      price: 600,

      description: "",
    },
    {
      id: 4,

      name: "Duỗi",

      img: img4,

      price: 600,

      description: "",
    },
    {
      id: 5,

      name: "Gội",

      img: img5,

      price: 70,

      description: "",
    },
  ];
  return (
    <div className="py-16 bg-base-100">
      <h2 className="text-center text-accent text-[30px] font-bold mb-16 ">
        <span className="text-primary">Dịch Vụ</span> của Chúng Tôi
      </h2>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="serviceSwiper w-[100%] h-[390px]"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <Service key={service.id} service={service}></Service>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => {
          navigate("bang-gia");
        }}
        className="px-8 mt-8 block mx-auto  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white"
      >
        Xem chi tiết
      </button>
    </div>
  );
};

export default AwesomeServices;
