import { FC } from "react";

interface Paragraph {
  text: string;
  className: string;
}

export const Paragraph: FC<Paragraph> = ({ text, className }) => {
  return <p className={` ${className}`}>{text}</p>;
};
