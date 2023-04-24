import dogCat from "../../mainImg/3348095-dog-cat-1440.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import LetterAnimation from "./letterAnimation";
import ScrollDown from "./scrollDown";
import dogWalk from "../../images/2023-02-165.jpg";
import Carousel from "./carousel";
import Kursor from "kursor";
import GoogleMaps from "./googleMaps";
import Contact from "./contact";
import Footer from "./footer";

export default function Homepage() {
  const [showBottomAnimated, setShowBottomAnimated] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  //if scree nis less than 400 px then remove kursor

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
          style={{ y }}
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
            I have been walking dogs for <b>10 years</b>. I{" "}
            <span style={{ color: "pink" }}>
              <b>love</b>
            </span>{" "}
            all dogs. They have such different personalities and always{" "}
            <span style={{ color: "greenyellow" }}>
              <b>surprise</b>
            </span>{" "}
            you. It is really important to talk to the dogs just like people.
            They{" "}
            <span style={{ color: "blueviolet" }}>
              <b>understand</b>
            </span>{" "}
            more than you think.
          </p>
          <button>Get a quote</button>
        </div>
      </div>
      <Carousel />
      <GoogleMaps />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
