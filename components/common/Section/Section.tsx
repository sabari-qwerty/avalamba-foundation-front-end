import { FC, ReactNode } from "react";

interface Section {
  children?: ReactNode;
  id?: string;
  className?: string;
}

export const Section: FC<Section> = ({ children, id, className }) => {
  return (
    <section
      className={`flex lg:flex-col xsm:flex-row py-20 w-full mx-auto justify-center items-center ${className} `}
      id={id}
    >
      {children}
    </section>
  );
};
