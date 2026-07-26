import React from "react";
import { ArrowRight } from "lucide-react";

const ImageContainer = ({ id, img, text, buttonLable }) => {
  return (
    <div
      className="relative w-[290px] h-[650px] flex-shrink-0 rounded-[36px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        {/* Number */}
        <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-2xl font-semibold">
          {id}
        </div>

        {/* Bottom Content */}
        <div>
          <p className="text-white text-[17px] leading-9 mb-15">
            {text}
          </p>

          {/* Button */}
          <div className="relative inline-flex items-center h-12 w-55">
            <div className="w-full h-full bg-[#6275FF] rounded-full flex items-center pl-6 pr-14">
              <span className="text-white font-medium truncate">
                {buttonLable}
              </span>
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