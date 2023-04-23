import { motion } from "framer-motion";

export default function ScrollDown() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            ease: "easeInOut",
            duration: 1,
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: {
            ease: "easeInOut",
          },
        }}
        className="scrollDown"
      >
        {/* <h4>scroll Down</h4> */}
        <motion.svg
          animate={{
            y: [0, -8, 0],
            transition: {
              ease: "easeInOut",
              duration: 1,
              repeat: Infinity,
            },
          }}
          xmlns="http://www.w3.org/2000/svg"
          // xml:space="preserve"
          color="white"
          width="800"
          height="800"
          viewBox="0 0 330 330"
        >
          <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
        </motion.svg>
      </motion.div>
    </>
  );
}
