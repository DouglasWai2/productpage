import { motion, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface CarousselProps {
  desc: boolean | null;
}

export const Caroussel: React.FC<CarousselProps> = ({ desc }) => {
  const images: string[] = [
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_1.jpg?v=1688462179&width=1100",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_2.jpg?v=1688462179&width=1100",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_3.jpg?v=1688462179&width=1100",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_4.jpg?v=1688462179&width=1100",
    "https://www.urbantoolhaus.com/cdn/shop/files/C16016B-DS1_IncisorII_5.jpg?v=1688462179&width=1100",
  ];

  // const [images, setImages] = useState<string[]>([]);
  // async function getImages() {
  //     try {
  //         const data: [ { image: string } ] = await fetch('https://fakestoreapi.com/products')
  //         .then(res => res.json())
  //         console.log(data)
  //         const imageUrls = data.map(item => {
  //             return item.image
  //         })
  //         setImages(imageUrls)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  // useEffect(() => {
  //     getImages();
  //   }, []);

  const carousel = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, [images]);

  useEffect(() => {
    if (desc) {
      animate(".product-img", { scale: 1.2 }, { duration: 1 });
    } else {
      animate(".product-img", { scale: 1 }, { duration: 1 });
    }
  }, [desc]);

  return (
    <motion.div
      id="carousel"
      ref={carousel}
      className={`carousel overflow-hidden h-[70vh] max-w-full cursor-grab `}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        transition={{ duration: 2 }}
        className="flex items-center"
      >
        {images.map((image) => {
          return (
            <motion.div
              transition={{ duration: 0.3 }}
              className="container bg-black min-w-[450px] m-[14px] p-[0] rounded-[10px] overflow-hidden"
              key={image}
            >
              <motion.img
                whileHover={{ scale: [null, 1.2, 1.1] }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className={"product-img pointer-events-none"}
                src={image}
                alt="Texto-alt"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
