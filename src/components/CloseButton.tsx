import { motion } from "framer-motion";

interface CloseButtonProps {
  handleClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ handleClick }) => {
  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.2,
      }}
      className="w-[50px] h-[50px] text-[18pt] z-10 top-6 right-[45px] fixed text-center bg-white rounded-md"
    >
      X
    </motion.button>
  );
};
