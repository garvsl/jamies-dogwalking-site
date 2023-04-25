import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import imagesArray from "../../images/imagesHandler";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carouselCover = useRef();

  useEffect(() => {
    setWidth(
      carouselCover.current.scrollWidth - carouselCover.current.offsetWidth
    );
  }, []);
  const isInView = useInView(carouselCover, { once: true });

  return (
    <motion.div
      style={{
        transform: isInView ? "none" : "translateX(-400px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      id="Gallery"
      ref={carouselCover}
      className="carouselCover"
    >
      <h1>Gallery (Drag)</h1>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="imgCover"
      >
        {imagesArray.map((image) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut", type: "spring" }}
            className="individualImg"
            key={image}
          >
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
