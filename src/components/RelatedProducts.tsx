import { motion } from "framer-motion";

export const RelatedProduts = () => {
  const relatedImg: string[] = [
    "https://www.urbantoolhaus.com/cdn/shop/files/C18062AF-DS1_Elementum_1.jpg?v=1693399184&width=823",
    "https://www.urbantoolhaus.com/cdn/shop/files/C22018C-DS1_Gordo_1.jpg?v=1693397303&width=823",
    "https://www.urbantoolhaus.com/cdn/shop/files/C22025B-3_SentinelStrike_1.jpg?v=1692200290&width=823",
  ];

  return (
    <div>
      <div className="flex text-container">
      <h1 className="text-[44pt] my-[50px] relative">Related products<span className="red-square"></span></h1>
      </div>
      <div className="flex">
        {relatedImg.map((item, index) => {
          return (
            <div className="m-[10px]">
              <div className="overflow-hidden rounded-[10px]">
                <motion.img
                  whileHover={{ scale: 1.1, filter: "brightness(0.8)" }}
                  className=""
                  src={item}
                />
              </div>
              <div className="flex justify-between text-[18pt] m-[10px]">
                <p className="">Product name {+index}</p>
                <p className="border-[2px] border-gray-600 rounded-2xl text-center max-w-[200px] text-[18pt] px-[20px]">
                  $ 999,99
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
