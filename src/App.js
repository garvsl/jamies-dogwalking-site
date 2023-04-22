import { useEffect, useState } from "react";
import "./App.css";
import ImageCollection from "./components/loadingImages";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Homepage from "./components/homepage";

function App() {
  const [imagesLoading, setImagesLoading] = useState(true);

  return (
    <AnimatePresence mode="sync" className="App">
      {imagesLoading && (
        <ImageCollection
          setImagesLoading={(value) => setImagesLoading(value)}
        />
      )}
      {!imagesLoading && <Homepage />}
    </AnimatePresence>
  );
}

export default App;
