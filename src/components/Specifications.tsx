import { stagger, animate } from "framer-motion";
import "../App.css";
import { useEffect } from "react";

export const Specifications = () => {
  const tableRows: { specification: string; value: string }[] = [
    {
      specification: "Specification",
      value: "Value",
    },
    {
      specification: "Blade thickness",
      value: "4.0mm",
    },
    {
      specification: "Blade material",
      value: "Stainless Steel",
    },
    {
      specification: "Blade length",
      value: "90mm",
    },
    {
      specification: "Weight",
      value: "150g",
    },
  ];

  useEffect(() => {
    animate(
      "tr",
      { scaleX: [0, 1], opacity: [0.5, 1] },
      { delay: stagger(0.1), duration: 0.6 }
    );
  }, []);

  return (
    <table className="w-[600px] text-[24pt] font-light">
      <tbody>
        {tableRows.map((row, index) => {
          return (
            <tr
              className={
                "flex justify-between py-[6px] border-[#494949] " +
                (index !== tableRows.length - 1 ? "border-b-[2px]" : "")
              }
            >
              <td className="text-white">{row.specification}</td>
              <td>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
