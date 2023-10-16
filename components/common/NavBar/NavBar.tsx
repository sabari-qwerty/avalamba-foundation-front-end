import { FC, useState } from "react";
// import { NavData } from '@/pages/content'
import Link from "next/link";
import { styled } from "@tanstack/react-query-devtools/build/lib/utils";
import Image from "next/image";

const NavData = [
  {
    name: "About Us",
    dir: "/#About-Us",
  },
  {
    name: "Objectives",
    dir: "/#Objectives",
  },
  // {
  //   name: "Projects",
  //   dir: "/#Projects",
  // },
  {
    name: "Team",
    dir: "/team",
  },
  {
    name: " Blogs & Articles ",
    dir: "/article",
  },
  {
    name: "Get Involved",
    dir: "/get-involved",
  },
];

interface NavBar {
  bool: boolean;
  setBool: () => void;
}

export const NavBar: FC<NavBar> = ({ bool, setBool }) => {
  // const [bool, setBool] = useState(true);

  return (
    <nav
      className={`bg-[#A15236] w-full flex sticky top-0 text-white   items-center   ${
        bool
          ? "h-[100vh]"
          : "h-[10%] xsm:min-h-[60px] max-h-full  2xl:min-h-[60px]"
      } `}
      style={{ zIndex: "100" }}
    >
      <div className=" justify-between xsm:hidden lg:flex align-middle h-full  mx-auto w-[90%]">
        <div>
          <Link
            href={"/"}
            className="flex justify-center h-fullbg   space-x-3 "
          >
            <Image src={"/icon/icon.svg"} width={40} height={0} alt="icon" />
            <Image
              src={"/icon/text.svg"}
              width={80}
              height={80}
              alt="icon-text"
            />
          </Link>
        </div>

        <div className="w-full flex justify-end items-center xsm:hidden lg:flex lg:text-md ">
          {NavData.map((i, k) => (
            <Link key={k} href={i.dir} className="px-6  font-medium text-md">
              {i.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`w-[90%] h-full xsm:flex lg:hidden mx-auto justify-between pt-4 pb-4  ${
          bool && "pt-3"
        }`}
      >
        <div className="flex flex-col w-full ">
          <div className="flex w-full">
            <div>
              <Link
                href={"/"}
                className="flex justify-center h-fullbg   space-x-3 "
              >
                <Image
                  src={"/icon/icon.svg"}
                  width={40}
                  height={0}
                  alt="icon"
                />
                <Image
                  src={"/icon/text.svg"}
                  width={80}
                  height={80}
                  alt="icon-text"
                />
              </Link>
            </div>
            <div className="w-full flex justify-end p ">
              <div
                className={`menu-btn-1 ${bool ? "active" : ""}`}
                onClick={setBool}
              >
                <span></span>
              </div>
            </div>
          </div>
          <div
            className={`h-full flex justify-end space-y-8   pb-10 flex-col text-3xl ${
              !bool && "hidden"
            }`}
          >
            {NavData.map((i, k) => (
              <Link
                key={k}
                href={i.dir}
                className="px-6  font-medium text-md"
                onClick={setBool}
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

{
  /* <Link
href={"/"}
className="flex justify-center h-fullbg align-top  space-x-3 "
>
<Image src={"/icon/icon.svg"} width={40} height={0} alt="icon" />
<Image
  src={"/icon/text.svg"}
  width={80}
  height={80}
  alt="icon-text"
/>
</Link>
<div className="my-auto xsm:hidden  lg:flex lg:text-md    ">
{NavData.map((i, k) => (
  <Link
    key={k}
    href={i.dir}
    className="px-6  font-medium text-md"
  >
    {i.name}
  </Link>
))}
</div>
<div className="lg:hidden xsm:inline-block my-auto">
<div
  className={`menu-btn-1 ${bool ? "" : "active"}`}
  onClick={setBool}
>
  <span></span>
</div>
<div
  style={{ paddingBottom: "100px" }}
  className={` h-[100vh] w-full  flex-col justify-end    space-y-8 items-start text-3xl pb-16  ${
    bool ? "hidden" : "flex"
  }`}
>
  {NavData.map((i, k) => (
    <Link
      key={k}
      href={i.dir}
      className="px-4 "
      onClick={setBool}
    >
      {i.name}
    </Link>
  ))}
</div>
</div> */
}
