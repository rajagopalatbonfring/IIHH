// Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnim from "../assets/lottie/loading.json";

const Loader = () => {
  return (
    <div className="w-40 h-40">
      <Lottie animationData={loadingAnim} loop={true} />
    </div>
  );
};

export default Loader;
