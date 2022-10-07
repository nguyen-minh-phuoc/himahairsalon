import React from "react";

const Service = ({ service }) => {
  const { name, price, img } = service;
  //const navigate = useNavigate();
  return (
    <div
      className={`mx-auto bg-white drop-shadow-xl md:drop-shadow-xl lg:drop-shadow-xl  w-[340px] h-[300px] md:w-[340px] md:h-[317px] hover:shadow-xl hover:transition-all hover:ease-in-out hover:duration-300  rounded-xl flex flex-col justify-center items-center`}
    >
      <img src={img} className="w-[128px] h-[128px]" alt="" />
      <h2 className="mt-4 mb-1 font-semibold text-accent">{name}</h2>
      <h2 className="text-primary mb-2">{price}k</h2>
      {/* <p className="px-7 text-center  text-gray-500 font-light">
        {description}
      </p> */}
    </div>
  );
};
export default Service;
