import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imagesArray from "../../images/imagesHandler";

export default function Carousel() {
  const [count, setCount] = useState(1);

  const handleCountUp = () => {
    if (count === imagesArray.length - 1) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
    console.log(count);
    // console.log(imagesArray.length);
  };

  const handleCountDown = () => {
    if (count === 0) {
      setCount(imagesArray.length - 1);
    } else {
      setCount(count - 1);
    }
    console.log(count);
  };
  return (
    <div className="carouselCover">
      <button onClick={() => handleCountDown()}>prev</button>
      <button onClick={() => handleCountUp()}>next</button>
      <div className="imgCover">
        <img src={imagesArray[count]} alt="" />
      </div>
    </div>
  );
}
