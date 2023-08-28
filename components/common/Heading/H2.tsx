import { FC } from "react";

interface H2 {
  text: string;
  className?: string;
}

export const H2: FC<H2> = ({ text, className }) => {
  return (
    <h2
      className={`font-bold  lg:text-3xl xsm:text-lg text-center ${className}`}
    >
      {text}
    </h2>
  );
};
