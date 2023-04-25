import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Contact from "./contact";
import OpenHours from "./open";

const pathVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.4,
    },
  },
};

const navbarWrap = {
  initial: {
    opacity: 0,
    y: -50,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [shouldChangeColor, setShouldChangeColor] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);
  const [displayHours, setDisplayHours] = useState(false);
  const [storeStatus, setStoreStatus] = useState("closed");
  const [hamburgerClass, setHamburgerClass] = useState("hamburger");
  const [showHamburgMenu, setShowHamburgMenu] = useState(false);

  const handleHamburger = () => {
    setHamburgerClass(
      hamburgerClass === "hamburger" ? "hamburger active" : "hamburger"
    );

    setShowHamburgMenu(!showHamburgMenu);
  };

  const handleContactClick = () => {
    setDisplayContact(!displayContact);
  };

  const handleHoursClick = () => {
    setDisplayHours(!displayHours);
    const currentDayOfWeek = new Date().getDay();
    const currentHour = new Date().getHours();

    const businessHours = {
      Mon: { open: 8, close: 20 },
      Tue: { open: 8, close: 20 },
      Wed: { open: 8, close: 20 },
      Thu: { open: 8, close: 20 },
      Fri: { open: 8, close: 20 },
      Sat: { open: 8, close: 20 },
      Sun: { open: 8, close: 20 },
    };

    const todaysBusinessHours =
      businessHours[Object.keys(businessHours)[currentDayOfWeek - 1]];

    if (
      todaysBusinessHours &&
      currentHour >= todaysBusinessHours.open &&
      currentHour < todaysBusinessHours.close
    ) {
      setStoreStatus("open");
    }
  };

  const hoursWrap = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hoursWrap.current && !hoursWrap.current.contains(event.target)) {
        setDisplayHours(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoursWrap]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setShouldChangeColor(true);
    } else {
      setShouldChangeColor(false);
    }
  });
  return (
    <>
      <motion.div
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        className="navbar"
      >
        <motion.div
          variants={navbarWrap}
          animate={shouldChangeColor ? "animate" : "initial"}
          className="navbarColor"
        />
        <a href="#Main" className="logoText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280.93 268.55"
            height="90px"
          >
            <path
              d="M364.15 363.99c-.915.07-2.447.77-3.049.43-.74-.42.462 1.84-.327 1.39-.394-.223-.624 2.933-.215 4.921.41 1.988.323 3.85-.603 3.877-.927.027 2.14 3.223-1.177 1.33-.463-.264-.77-.437-1.002-.562.175.048.246-.014-.133-.41-.606-.632-.435-.545-.379-.521-.047-.049-.275-.255-1.063-.921-2.135-1.803-7.932-6.86-7.264-5.872.669.988-3.422-2.026-5.687-3.12-.161-.078-.234-.118-.338-.174.045.161-.206.34-1.391.368-1.641.04-.757 2.09.061 3.479-.117-.161-.221-.304-.368-.502-3.873-5.225 1.217 5.376 1.422 7.15.205 1.776.395 4.643.532 6.896.136 2.252-2.182 15.838-2.455 17.339-.274 1.501.127 2.32-1.443 3.345s-3.272 2.726-4.706 4.092c-1.433 1.365-7.574 6.146-9.963 8.194-2.39 2.048-5.397 4.785-6.762 6.833-1.366 2.048-2.318 3.746-2.865 5.453-.546 1.706-2.53 7.033-2.802 8.398-.274 1.366-2.867 4.779-4.369 6.895s-5.941 5.26-7.989 6.353-7.165 4.642-9.555 6.486-6.277 4.16-6.823 4.5c-.546.342-5.945 3.69-7.447 4.236-1.502.546-3.896 2.35-4.092 2.66-.196.309.004 2.96.583 4.408.58 1.449 2.268 3.814 2.895 4.634.628.821 1.454.914 1.985 1.3.53.386.82 1.81 2.731 5.36s5.461 4.916 7.1 5.872c1.638.956 5.046.818 5.728.818.683 0 .412.136 1.095 1.228s4.776 3.144 6.005 3.007c1.229-.136 9.97-2.457 12.838-3.14 2.867-.683 17.892-5.517 22.526-5.903 4.634-.386 8.49 1.926 11.58 3.857 3.09 1.93 7.728 7.345 10.046 8.89 2.317 1.544 1.759-1.451 5.79.378 4.03 1.83 11.194 8.887 14.669 14.68 2.066 3.445 3.625 13.588 7.529 23.109 38.38-13.792 65.757-50.461 65.757-93.653 0-5.05-.383-10.007-1.105-14.854-13.256-5.882-33.992-14.91-34.126-14.966-.17-.07-.42-.191-.747-.358-.327-.167-27.904-27.851-28.367-28.101-.463-.25-11.985-12.396-12.562-12.716-.577-.32-8.516-5.946-9.186-6.322-.126-.07-.3-.088-.512-.072zm-21.237.368c-.07-.253-.834-.445 0 0z"
              transform="translate(-223.82 -315.23)"
            />
          </svg>
          <h1>Jamies</h1>
        </a>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Gallery">Gallery</a>
          </li>
          <li>
            <a href="#Map">Map</a>
          </li>
          <li onClick={handleContactClick} className="noLink">
            Quote
          </li>
          <li onClick={handleHoursClick} className="noLink">
            Hours
          </li>
        </ul>
        <div onClick={handleHamburger} className={hamburgerClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <AnimatePresence>
          {showHamburgMenu && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="hamburgMenu"
            >
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Gallery">Gallery</a>
              </li>
              <li>
                <a href="#Map">Map</a>
              </li>
              <li onClick={handleContactClick} className="noLink">
                Quote
              </li>
              <li onClick={handleHoursClick} className="noLink">
                Hours
              </li>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
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
        {displayHours && (
          <motion.div
            ref={hoursWrap}
            className="hoursWrap"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            <OpenHours storeStatus={storeStatus} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
