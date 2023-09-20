import { Dispatch, FC, useState, SetStateAction } from "react";
import Image from "next/image";

interface DropDown {
  active: number;
  list: string[] | number[] | any;
  setActive: Dispatch<SetStateAction<number>>;
  lable: string;
  top?: string;
}

export const DropDown: FC<DropDown> = ({ active, list, setActive, lable }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-2 w-full    ">
      <div className="">{lable}</div>
      <div
        onClick={() => setOpen(!open)}
        className="border border-[#DCE0E4] rounded-lg py-3  flex justify-between items-center align-middle cursor-pointer"
      >
        <div className="w-[90%]   flex justify-between mx-auto  align-middle h-full">
          <div>{list[active]}</div>
          <div
            className={`  flex justify-center align-middle items-center   ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <Image src={"/down.svg"} alt="donw" width={16} height={16} />
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`flex flex-col space-y-2 absolute top-20 w-full bg-white drop-shadow-lg  z-20 `}
        >
          <div className="w-[95%]  mx-auto flex justify-start">
            <div className=" w-full mx-auto ">
              <div className="flex flex-col space-y-2">
                {list.map((data: string, key: number) => (
                  <span
                    key={key}
                    onClick={() => {
                      setActive(key);
                      setOpen(!open);
                    }}
                    className="hover:bg-[#a7a7a756] py-2 pl-2  my-2"
                  >
                    {data}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
