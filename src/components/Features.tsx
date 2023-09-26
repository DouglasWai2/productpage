import { motion, animate, stagger } from "framer-motion";
import { useEffect } from "react";

export const Features = () => {
  const features: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ];

  useEffect(() => {
    animate(
      ".features",
      { y: [12, 0], opacity: [0, 1] },
      { delay: stagger(0.1) }
    );
  }, []);

  return (
    <div className="w-[600px] text-[32pt] font-thin max-h-[320px] overflow-y-auto scrollbar">
      {features.map((item) => {
        return (
          <motion.p className="features my-[10px]">
            -<span className="text-white ml-[50px]"> {item}</span>
          </motion.p>
        );
      })}
    </div>
  );
};
