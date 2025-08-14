import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

const cards = [
  <Card2 />,
  <Card3 />,
  <Card4 />,
  <Card5 />,
  <Card6 />,
  <Card1 />,
];

export default function CardSliding({ isPaused }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full h-[50vh] mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            x: -100,
            transition: { duration: 0.5 },
          }}
        >
          {cards[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
