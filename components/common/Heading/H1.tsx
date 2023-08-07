import { FC } from "react";

interface h1 {
  text: string;
  className?: string;
}
export const H1: FC<h1> = ({ text, className }) => {
  return (
    <h1
      className={`font-bold lg:text-4xl xsm:text-2xl text-center ${className}`}
    >
      {text}
    </h1>
  );
};
