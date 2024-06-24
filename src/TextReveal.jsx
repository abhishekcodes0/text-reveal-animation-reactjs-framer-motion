// src/TextReveal.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextReveal = ({ text }) => {
  const letters = text.split("");

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bebas text-6xl text-white z-10 font-semibold overflow-hidden pt-10 mt-[-2.5rem]">
          {letters.map((item, index) => {
            return (
              <motion.span
                className="inline-block"
                animate={{ y: 0 }}
                initial={{ y: 100 }}
                key={index}
                transition={{
                  delay: index / 25,
                }}
              >
                {item}
              </motion.span>
            );
          })}
        </h1>
      </div>
    </AnimatePresence>
  );
};

export default TextReveal;
