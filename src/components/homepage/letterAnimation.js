import { motion } from "framer-motion";

export default function LetterAnimation({ text }) {
  const letters = Array.from(text);

  const letterContainer = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3, duration: 1 },
    },
  };

  const individualLetter = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="mainTitle"
      variants={letterContainer}
      initial="hidden"
      animate="show"
    >
      {letters.map((letter, index) => (
        <motion.span variants={individualLetter} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
