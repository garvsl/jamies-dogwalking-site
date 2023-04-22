import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [currentVariant, setCurrentVariant] = useState("initial");

  const dot = useRef(null);
  const dotX = useRef(window.innerWidth / 2);
  const dotY = useRef(window.innerHeight / 2);

  const mouseMove = (e) => {
    dotX.current = e.pageX;
    dotY.current = e.pageY;

    dot.current.style.top = dotY.current + "px";
    dot.current.style.left = dotX.current + "px";
  };

  const mouseOverEvent = () => {
    setCurrentVariant("animate");
  };

  const mouseOutEvent = () => {
    setCurrentVariant("initial");
  };

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    initial: {
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: "black",
    },
    animate: {
      transform: "translate(-50%, -50%) scale(0.45)",
      //   backgroundColor: "white",
      //   mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      ref={dot}
      className="cursor"
      variants={variants}
      animate={currentVariant}
    />
  );
}
