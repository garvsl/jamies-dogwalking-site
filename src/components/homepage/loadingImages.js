import dogCat from "../../mainImg/3348095-dog-cat-1440.jpg";
import dogLick from "../../images/2023-02-165.jpg";
import dogGolden from "../../images/2E8004BF-5356-4D80-A2F2-35A3FA4C5156.jpeg";
import dogDistanced from "../../images/2023-02-167.jpg";
import dogUpside from "../../images/2023-02-16.jpg";
import { motion } from "framer-motion";
import Kursor from "kursor";

const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.55,
    },
  },
};

const staggerAnimations = {
  hidden: { opacity: 0, y: 200, scale: 0.75 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.35, 0.95],
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const mainImg = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.35, 0.95],
      duration: 1.6,
    },
  },
};

export default function ImageCollection({ setImagesLoading }) {
  new Kursor({
    type: 4,
    removeDefaultCursor: true,
    color: "#111",
  });

  return (
    <motion.div
      className="loadingImgCover"
      variants={staggerChildren}
      onAnimationComplete={() => setImagesLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.img
        variants={staggerAnimations}
        className="loadingImg"
        src={dogLick}
        alt="A white dog licking upon a womens nose"
      ></motion.img>
      <motion.img
        variants={mainImg}
        src={dogCat}
        className="loadingImg"
        alt="A golden dog peering over a mountain, and glaring at a vast land where another mountain is seemingly experiencing an avalanche"
        layoutId="mainImg"
        layout
      ></motion.img>
      <motion.img
        variants={staggerAnimations}
        className="loadingImg"
        src={dogGolden}
        alt="A women smiling and posing with a golden dog who is sitting down"
      ></motion.img>
      <motion.img
        variants={staggerAnimations}
        className="loadingImg"
        src={dogDistanced}
        alt="A women looking at a dog up close"
      ></motion.img>
      <motion.img
        variants={staggerAnimations}
        className="loadingImg"
        src={dogUpside}
        alt="A black dog laying upside down in the grass"
      ></motion.img>
    </motion.div>
  );
}
