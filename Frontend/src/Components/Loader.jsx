import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/lottie/loading.json"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="w-40 h-40">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
