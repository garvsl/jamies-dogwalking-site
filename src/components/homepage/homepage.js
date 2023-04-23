import dogCat from "../../images/3348095-dog-cat-1440.jpg";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import Cursor from "../cursor";
import { useEffect, useState } from "react";
import LetterAnimation from "./letterAnimation";
import ScrollDown from "./scrollDown";

export default function Homepage() {
  const [showBottomAnimated, setShowBottomAnimated] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBottomAnimated(true);
    }, 1600);
    setTimeout(() => {
      setShowScroll(true);
    }, 3200);
  }, []);
  return (
    <>
      <Cursor />
      <Navbar />
      <div className="mainCover">
        <motion.img
          layoutId="mainImg"
          layout
          transition={{
            ease: [0.6, 0.01, -0.05, 0.9],
            duration: 1.6,
            type: "spring",
          }}
          src={dogCat}
          alt="A brown and white dog, lovingly laying together with a greyish cat"
          className="mainImg"
        />
        {showScroll && <ScrollDown />}
        <div className="mainTitleWrap">
          <LetterAnimation text={"Walking with love,"} />
          {showBottomAnimated && <LetterAnimation text={"one paw at a time"} />}
        </div>
      </div>
      <div className="aboutCover"></div>
    </>
  );
}
