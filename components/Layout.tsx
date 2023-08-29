import { FC, ReactNode, useState } from "react";
import { NavBar } from "./common/NavBar/NavBar";
import { Footer } from "./common/Footer/Footer";
import { H2 } from "./common/Heading/H2";
import { Section } from "./common/Section/Section";
import Script from "next/script";

interface Layout {
  children?: ReactNode;
}

export const Layout: FC<Layout> = ({ children }) => {
  const [bool, setBool] = useState(true);

  return (
    <div className={`relative ${!bool && "bg-[#A15236]"}`}>
      <NavBar bool={bool} setBool={() => setBool(!bool)} />
      {children}
      {/* <Section id="">
        <div className="flex flex-col space-y-16 w-[90%]">
          <H2 text="Subscribe to Our News Letters !" />
          <div className=" flex justify-center">
            <input
              type="email"
              placeholder="Enter you email address"
              className="text-sm rounded-l-full border-[1px] border-[#A15236] xsm:indent-7 lg:indent-9   min-h-[50px] lg:w-2/4 sm:w-[90%] w-[90%]"
            />
            <button className="min-h-[50px]  xsm:px-6   lg:px-0  bg-[#A15236] text-[#fff] w-[200px] rounded-r-full">
              Subsribe
            </button>
          </div>
        </div>
      </Section> */}

      <Footer bool={bool} />

      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-GDXDVKJPQX" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-GDXDVKJPQX');
        `}
        </Script> */}
    </div>
  );
};
