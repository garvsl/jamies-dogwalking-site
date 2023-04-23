import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imagesArray from "../../images/imagesHandler";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carouselCover = useRef();

  useEffect(() => {
    setWidth(
      carouselCover.current.scrollWidth - carouselCover.current.offsetWidth
    );
  }, []);

  return (
    <motion.div ref={carouselCover} className="carouselCover">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="imgCover"
      >
        {imagesArray.map((image) => (
          <motion.div className="individualImg" key={image}>
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
