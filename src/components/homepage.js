import dogCat from "../images/3348095-dog-cat-1440.jpg";
import { motion } from "framer-motion";
import Navbar from "./navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <motion.img
        layoutId="mainImg"
        transition={{
          ease: [0.6, 0.01, 0.35, 0.95],
          duration: 1.6,
          type: "spring",
        }}
        src={dogCat}
        alt="A brown and white dog, lovingly laying together with a greyish cat"
        className="mainImg"
      ></motion.img>
    </>
  );
}
