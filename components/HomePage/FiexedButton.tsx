import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface FiexedButton {
  text?: string;
  className?: String;
}

export const FiexedButton: FC<FiexedButton> = ({ text, className }) => {
  return (
    <Link href="/donation/temple">
      <button
        className={` xsm:hidden md:flex   items-center xsm:h-[50px]  justify-center  fixed bottom-[1rem] right-[2rem] rounded-full  z-10 max-w-[350px] bg-[#FFFFFF] text-[#A15236] xsm:min-w-[230px] lg:min-w-[250px] shadow-lg xsm:text-base md:text-lg  2xl:text-2xl xsm:py-2 lg:py-4 2xl:py-8  ${className} `}
      >
        {text}{" "}
        <span className="pl-2  h-full flex justify-center items-center my-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z"
              fill="#A15236"
            />
            <path
              d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
              fill="#A15236"
            />
          </svg>
        </span>
      </button>

      <button className="{` xsm:flex md:hidden   items-center xsm:h-[50px]  justify-center  fixed bottom-[1rem] right-[2rem] rounded-full  z-10    shadow-2xl   2xl:text-2xl xsm:py-2 lg:py-4 2xl:py-8">
        <Image src="/donation.svg" alt="donation icon" width={50} height={50} />
      </button>
    </Link>
  );
};
