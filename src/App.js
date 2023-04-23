import { useState } from "react";
import "./App.css";
import ImageCollection from "./components/homepage/loadingImages";
import { AnimatePresence, motion } from "framer-motion";
import Homepage from "./components/homepage/homepage";

function App() {
  const [imagesLoading, setImagesLoading] = useState(true);

  return (
    <AnimatePresence mode="sync" className="App">
      {imagesLoading && (
        <motion.div key="imagesLoading">
          <ImageCollection
            setImagesLoading={(value) => setImagesLoading(value)}
          />
        </motion.div>
      )}
      {!imagesLoading && <Homepage />}
    </AnimatePresence>
  );
}

export default App;
