import { PriceCard } from "./PriceCard";
import { Tags } from "./Tags";
import { useEffect } from "react";
import {  useAnimate } from "framer-motion";
import { ChooseModel } from "./ChooseModel";
import { Description } from "./Description";
import { RelatedProduts } from "./RelatedProducts";

interface ProductInfoProps {
  handleClick(): void;
  desc: boolean | null;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  handleClick,
  desc,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (desc) {
      animate(
        scope.current,
        {
          height: "100%",
          transform: "translateY(-100vh) translateY(224px)",
          "padding-top": "100px",
        },
        { ease: [0.1, 0.8, 0.9, 1], duration: 1 }
      );
    } else if(desc === false) {
      animate(
        scope.current,
        {
          height: ["100vh", "30vh"],
          transform: "translateY(0)",
          "padding-top": "16px",
        },
        { ease: [0.1, 0.6, 0.9, 1], duration: 1 }
      );
      animate('.inner-container', {opacity:[0, 1]}, {duration: 1, delay: 0.5})
    }
  }, [desc]);

  return (
    <div
      ref={scope}
      className="py-4 relative h-[30vh] px-[60px] w-full bg-[#f2f3f2] bottom-0"
    >
      <div className={"inner-container flex justify-between"}>
        <div className="flex flex-col gap-[50px] justify-between">
          <div className="flex relative text-container">
          <h1 className="text-[44pt]">Lorem Ipsum<span className="red-square"></span></h1>
          </div>
          <Tags />
        </div>
        <div className="flex flex-col justify-between">
          <PriceCard />
          <button
            onClick={handleClick}
            className="border-[2px] border-[#fe3605] rounded-2xl text-[14pt] text-center w-[150px] ml-[220px] text-[#fe3605]"
          >
            description
          </button>
        </div>
      </div>
      <form>
      {desc ? <ChooseModel /> : ''}
      </form>
       {desc ? [<Description />, <RelatedProduts />] : ""}
    </div>
  );
};
