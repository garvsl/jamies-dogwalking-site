import dogCat from "../../mainImg/3348095-dog-cat-1440.jpg";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { useEffect, useState, useRef } from "react";
import LetterAnimation from "./letterAnimation";
import ScrollDown from "./scrollDown";
import dogWalk from "../../images/2023-02-165.jpg";
import Carousel from "./carousel";
import Kursor from "kursor";
import GoogleMaps from "./googleMaps";

export default function Homepage() {
  const [showBottomAnimated, setShowBottomAnimated] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    new Kursor({
      type: 4,
      removeDefaultCursor: true,
      color: "#111",
    });
  }, []);

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
      <Navbar />
      <div id="Main" className="mainCover">
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
      <div id="About" className="aboutCover">
        <h1>About</h1>
        <div className="infoCover">
          <img src={dogWalk} alt="" />
          <p>
            I have been walking dog for 10 years. I love all dogs. They have
            such different personalities and always surprise you. It is really
            important to talk to the dogs just like people. They understand more
            than you think. I try to walk them in different areas around the
            neighborhood so it isn't so boring for them.
          </p>
          <button>Get a quote</button>
        </div>
      </div>
      <Carousel />
      <GoogleMaps />
    </>
  );
}
