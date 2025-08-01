// import React from "react";
// import Lottie from "lottie-react";
// import loaderAnimation from "../assets/lottie/loading.json"

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
//       <div className="w-40 h-40">
//         <Lottie animationData={loaderAnimation} loop={true} />
//       </div>
//     </div>
//   );
// };

// export default Loader;


import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
   position: relative;
   width: 5.5em;
   height: 5.5em;
   transform: rotate(165deg);
  }

  .loader:before, .loader:after {
   content: "";
   position: absolute;
   top: 50%;
   left: 50%;
   display: block;
   width: 0.5em;
   height: 0.5em;
   border-radius: 0.25em;
   transform: translate(-50%, -50%);
  }

  .loader:before {
   animation: before8 2s infinite;
  }

  .loader:after {
   animation: after6 2s infinite;
  }

  @keyframes before8 {
   0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }

   35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
   }

   70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
   }

   100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }
  }

  @keyframes after6 {
   0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }

   35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
   }

   70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
   }

   100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }
  }

  .loader {
   position: absolute;
   top: calc(50% - 1.25em);
   left: calc(50% - 1.25em);
  }`;

export default Loader;

