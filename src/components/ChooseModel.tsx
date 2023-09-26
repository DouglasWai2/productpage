import {
  motion,
  stagger,
  animate
} from "framer-motion";
import { useEffect } from "react";

export const ChooseModel = () => {
  const models: string[] = [
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-3_IncisorII_1.jpg?v=1688462104&width=823",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-2_IncisorII_1.jpg?v=1688462033&width=1946",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-1_IncisorII_1.jpg?v=1688461915&width=823",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_1.jpg?v=1688462179&width=1946",
  ];

  useEffect(() => {
    animate(
      ".option",
      { x: [-100, 0], opacity: [0, 1] },
      { delay: stagger(0.2) }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-[100px]"
    >
      <div className="text-container flex">
      <div className="text-[44pt] relative">
        Choose an option<span className="red-square"></span>
      </div>
      
      </div>
      <div className="flex">
        {models.map((item, index) => {
          return (
            <motion.div
              transition={{ duration: 1 }}
              className="option overflow-hidden max-w-[300px] p-0 m-[10px] mb-[100px]"
              key={`Choose-Option-${index}`}
            >
              <input
                type="radio"
                className="peer hidden"
                id={`model-${index}`}
                name='choose-option'
              />
              <label
                className="label max-h-[300px]  max-w-[300px]"
                htmlFor={`model-${index}`}
              >
                <motion.img
                  whileHover={{ filter: "brightness(0.8)" }}
                  className="rounded-md"
                  src={item}
                />
                 <div className="text-[16pt]">
                <p className="text-[18pt] font-semibold">{`Model ${
                  index + 1
                }`}</p>
                <p className="font-semibold text-gray-500">{`Color ${
                  index + 1
                }`}</p>
              </div>
              </label>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
