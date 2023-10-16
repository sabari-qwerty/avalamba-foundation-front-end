import { FC } from "react";

interface H2 {
  text: string;
  className?: string;
}

export const H2: FC<H2> = ({ text, className }) => {
  return (
    <h2
      className={`font-bold  2xl:text-4xl xsm:text-2xl text-center ${className}`}
    >
      {text}
    </h2>
  );
};
