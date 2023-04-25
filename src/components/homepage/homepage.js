import dogCat from "../../mainImg/3348095-dog-cat-1440.jpg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Navbar from "./navbar";
import { useEffect, useState, useRef } from "react";
import LetterAnimation from "./letterAnimation";
import ScrollDown from "./scrollDown";
import dogWalk from "../../images/2023-02-165.jpg";
import Carousel from "./carousel";

import GoogleMaps from "./googleMaps";
import Contact from "./contact";
import Footer from "./footer";

export default function Homepage() {
  const [showBottomAnimated, setShowBottomAnimated] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  const handleContactClick = () => {
    setDisplayContact(!displayContact);
  };

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
      <AnimatePresence>
        {displayContact && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              type: "spring",
            }}
            className="contactWrap"
          >
            <Contact setDisplayContact={(val) => setDisplayContact(val)} />
          </motion.div>
        )}
      </AnimatePresence>
      <div id="Main" className="mainCover">
        <motion.img
          // layoutId="mainImg"
          // layout
          style={{ y }}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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
      <motion.div id="About" className="aboutCover">
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
          <button onClick={handleContactClick}>Get a quote</button>
        </div>
      </motion.div>

      <Carousel />
      <GoogleMaps />
      <Footer />
    </>
  );
}
