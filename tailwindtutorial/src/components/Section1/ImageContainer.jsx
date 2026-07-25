import React from "react";
import { ArrowRight } from "lucide-react";
const ImageContainer = ({ id, img, text, buttonLable }) => {
  return (
    <div
  className="relative h-full w-1/3 rounded-4xl overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${img})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex h-full flex-col justify-between p-10">
    <div className="text-[30px] bg-white w-11 h-11 flex items-center justify-center rounded-full">
      {id}
    </div>

    <div>
      <p className="text-white text-lg mb-15">{text}</p>

      <div className="relative inline-flex items-center h-12 w-50">
        <div className="bg-[#6275FF] h-full rounded-full pl-6 pr-14 flex items-center">
          <span className="text-white font-medium">{buttonLable}</span>
        </div>

        <div className="absolute right-0 w-12 h-12 rounded-full bg-[#6275FF] flex items-center justify-center">
          <ArrowRight size={22} className="text-white" />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ImageContainer;