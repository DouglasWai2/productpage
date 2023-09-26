import { useRef, useState, useEffect } from "react";
import "../App.css";
import { Specifications } from "./Specifications";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  animate,
  easeInOut,
  spring,
} from "framer-motion";
import { Overview } from "./Overview";
import { Features } from "./Features";

export const Description: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [about, setAbout] = useState<boolean>(false);
  const [aboutText, setAboutText] = useState<boolean>(false);
  const [specification, setSpecification] = useState<boolean>(false);
  const [list, setList] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setAbout(true);
    }
    if (latest > 0.21) {
      setAboutText(true);
    }
    if (latest > 0.44) {
      setSpecification(true);
      if (status === "") setStatus("specifications");
      setList(true);
    }
    if (latest > 0.76) {
    }
    console.log("Page scroll: ", latest);
  });

  useEffect(() => {
    if (about) {
      animate(
        "h1",
        { opacity: [0, 1], scale: [0.5, 1] },
        { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }
      );
    }
  }, [about]);

  useEffect(() => {
    if (aboutText) {
      animate(
        ".aboutText",
        { opacity: [0, 1], lineHeight: "1.5em" },
        { duration: 1.5, ease: easeInOut }
      );
    }
  }, [aboutText]);

  return (
    <div className="bg-[#1f1e1e] text-[#616161] py-[100px] mx-[-60px]">
      <div className="flex flex-col items-center w-[70%] pb-[100px] my-[100px] mx-auto gap-[50px]">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          ref={ref}
          className="border-[2px] border-[#616161] rounded-2xl text-center max-w-[200px] text-[14pt] text-white px-[50px]"
        >
          About
        </motion.h1>
        <div>
          <motion.p
            initial={{ opacity: 0, lineHeight: "10px" }}
            transition={{ type: spring }}
            className="aboutText text-[26pt] text-center text-[#959494]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>
        </div>
      </div>
      <div className="flex justify-between text-[18pt] w-[75%] my-[100px] mx-auto gap-[50px]">
        <ul className="text-[40pt]">
          <div className="flex">
          <motion.li
            onClick={() => setStatus("overview")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              "cursor-pointer relative " + (status === "overview" ? "active" : "")
            }
          >
            overview{ status === "overview" ? <span className="red-square"></span> : ''}
          </motion.li>
          </div>
          <div className="flex">
          <motion.li
            onClick={() => setStatus("specifications")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              "cursor-pointer relative " + (status === "specifications" ? "active" : "")
            }
          >
            specifications{status === "specifications" ? <span className="red-square"></span> : ''}
          </motion.li>
          </div>
          <div className="flex">
          <motion.li
            onClick={() => setStatus("features")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              "cursor-pointer relative " + (status === "features" ? "active" : "")
            }
          >
            features{status === "features" ? <span className="red-square"></span> : ''}
          </motion.li>
          </div>
          <div className="flex">
          <motion.li
            onClick={() => setStatus("shipping")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              "cursor-pointer relative " + (status === "shipping" ? "active" : "")
            }
          >
            shipping {status === "shipping" ? <span className="red-square"></span> : ''}
          </motion.li>
          </div>
        </ul>
        <div>
          {status === "overview" ? <Overview /> : ""}
          {status === "specifications" && specification === true ? (
            <Specifications />
          ) : (
            ""
          )}
          {status === "features" ? <Features /> : ""}
          {/* {status === 'shipping' ? <Shipping /> : ''} */}
        </div>
      </div>
    </div>
  );
};
