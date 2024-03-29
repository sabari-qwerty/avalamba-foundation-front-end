import { Layout } from "@/components/Layout";
import axios from "axios";
import { FC, FormEvent, useEffect, useState } from "react";
import { Section } from "../Section/Section";
import { H1 } from "../Heading/H1";
import { H2 } from "../Heading/H2";
import { DropDown } from "@/components/DropDown";
import { InputTag } from "../InputTag/InputTag";
import Image from "next/image";

import Link from "next/link";

interface prop {
  value?: string;
}

export const PhonePe: FC<prop> = ({ value }) => {
  const SubDonationCatgery: { [key: string]: string[] } = {
    "The Temple": [
      "Uzhavarapani",
      "Kainkaryam",
      "Conservation & Reconstruction",
      "Revival of daily pooja",
    ],
    "Vedic Traditions": [
      "Helping Vedapatashala",
      "Fund a nitya agnihotri",
      "Conducting & participating in Yagnas",
      "Revival of rare shakas of Vedas",
    ],
    "Performing Arts": [
      "For procuring vadhyams (instruments)",
      "Endowments to senior vidvans and vidushis",
      "Conservation of heritage structures",
      "Research & Publishing",
    ],
    "Research & Documentation": [
      "Manuscript & books digitization / preservation",
      "Conservation, curation of libraries & museums of  national importance",
      "Documentation related to other tangible heritage assets",
    ],
    Gauraksha: [
      "Feeding cows on anniversary",
      "Rescue from slaughterhouse",
      "Upkeep of gaushala",
      "Other sustainable projects",
    ],
    "Other Activtites": ["Azctivity"],
  };

  const CommonAmount = [200000, 100000, 50000, 10000, 5000];

  const CurrencyType = ["INR"];

  // const DonationCatgery = [
  //   "The Temple",
  //   "Vedic Traditions",
  //   "Performing Arts",
  //   "Research & Documentation",
  //   "Gauraksha",
  //   "Other Activtites",
  // ];

  const DonationCatgery = [
    {
      dir: "/donation/temple",
      name: "The Temple",
    },
    {
      dir: "/donation/vedic-traditions",
      name: "Vedic Traditions",
    },
    {
      dir: "/donation/performing-arts",
      name: "Performing Arts",
    },
    {
      dir: "/donation/research-documentation",
      name: "Research & Documentation",
    },
    {
      dir: "/donation/gauraksha",
      name: "Gauraksha",
    },
    {
      dir: "/donation/other",
      name: "Other Activtites",
    },
  ];

  const [catgery, setCatgery] = useState("The Temple");

  const [amount, setAmount] = useState<number | any>(0);
  const [active, setActive] = useState(0);
  const [_option, setOption] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [State, setState] = useState("");
  const [country, setCountry] = useState("");
  const [disabled, setDisabled] = useState(false);

  const name_ = SubDonationCatgery[catgery];
  const sub_donation_catgery = name_[_option];

  // const pathName = usePathname();

  // create merchat Transaction id
  // const merchantTransactionId =
  //   "MTID" + crypto.randomUUID().split("-").join("");

  // create marchant user id
  // const marchantUserId = "MUID" + crypto.randomUUID().split("-").join("");

  const redireactWindwow = (url: string) => window.location.replace(url);

  const handleCreateDb = async () => {
    try {
      setDisabled(true);
      const data = {
        name,
        email,
        phone,
        pan_number: pan,
        primary_category: catgery,
        sub_category: sub_donation_catgery,
        amount,
        message,
        address,
        pin_number: pin,
        state: State,
        country,
        city,
      };
      const res = await axios.post("/api/createdb", data);

      console.log(res);

      console.log(res.data.data?.data?.instrumentResponse?.redirectInfo?.url);
      await redireactWindwow(
        res.data.data?.data?.instrumentResponse?.redirectInfo?.url
      );
    } catch (err) {
      setDisabled(false);
      console.log(err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCreateDb();
  };

  return (
    <Layout>
      <Section className=" flex xsm:flex-col relative  ">
        <div className="pb-[60px] xsm:w-[90%] lg:w-full">
          <H1 text="Your Online Contributions Towards" />
        </div>
        <div className="w-[90%]  justify-center bg-[#A15236] text-white  rounded-2xl xsm:px-3 xsm:py-4 lg:p-6  ">
          {/* <div className="bg-[#A15236] py-6 rounded-2xl w-[90%] overflow-auto "> */}
          <div className="w-full flex lg:justify-between  xms:justify-start flex-nowrap xsm:px-2 lg:px-0 xsm:space-x-3 lg:space-x-0 lg:space-y-0 overflow-auto scrollbar-hide">
            {/* <div className="pl-2 flex text-white justify-between "> */}
            {DonationCatgery.map(
              (data: { dir: string; name: string }, key: number) => (
                <Link
                  href={data.dir}
                  className={`text-lg     hover:bg-white py-2 px-4 rounded-lg duration-200 hover:text-[#A15236] font-medium min-w-max ${
                    catgery == data.name ? "bg-white text-[#A15236]" : ""
                  }`}
                  key={key}
                  onClick={() => setCatgery(data.name)}
                  // onClick={() => {

                  //   console.log(_data);
                  // }}
                >
                  {data.name}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="w-[90%] sticky top-[60px] bg-white h-full pt-16 pb- border-b border-[#EDEFF1] pb-8 z-50">
          <H2
            text={catgery}
            className="xsm:text-center lg:text-start w-full lg:text-3xl  lg:font-bold"
          />
        </div>
        {/* <div className="w-full h-[1px] bg-[#EDEFF1] "></div> */}
        <div className="w-[90%] pt-12">
          <span className="font-blod p">Choose Amount</span>
          <div className=" flex    lg:justify-between xsm:justify-start xsm:gap-4 lg:gap-0 pt-8 flex-wrap ">
            {CommonAmount.map((data: number, key: number) => (
              <span
                onClick={() => {
                  setAmount(data);
                  console.log(data);
                }}
                key={key}
                className={` h-fit py-4 lg:px-[50px]  xsm:w-[45%] lg:w-fit   rounded-lg bg-[#a152361a] font-bold  flex justify-center items-center  ${
                  data == amount ? "border-2  border-[#A15236]" : ""
                }`}
              >
                ₹ {data.toLocaleString("en-US")}
              </span>
            ))}

            <input
              type="number"
              placeholder="Other amount"
              className="
            rounded-lg border-collapse border border-[#DCE0E4] py-4  text-base   xsm:w-[45%] lg:w-fit
            indent-5   "
              onChange={(e) => {
                setAmount(
                  Number(e.target.value) > 1 ? Number(e.target.value) : 1
                );
              }}
              value={amount}
            />
          </div>
          <div>
            <form
              className="flex flex-col space-y-6 pt-8 z--index "
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between xsm:space-y-6 lg:space-y-0 lg:space-x-12 xsm:flex-col lg:flex-row ">
                <div className="lg:w-[50%] xsm:w-full   relative">
                  <DropDown
                    active={active}
                    setActive={setActive}
                    list={CurrencyType}
                    lable="Currency"
                  />
                </div>
                <div className="lg:w-[50%] xsm:w-full overflow-hidden">
                  <InputTag
                    lable="Other Amount"
                    type="number"
                    value={amount}
                    setFun={setAmount}
                  />
                </div>
              </div>

              <div className="flex lg:space-x-12 lg:flex-row xsm:flex-col pt-4  ">
                <div className="flex flex-col lg:w-1/2 xsm:w-full space-y-6 ">
                  <div className="relative ">
                    <DropDown
                      active={_option}
                      setActive={setOption}
                      // @ts-ignore
                      list={SubDonationCatgery[catgery]}
                      lable="Select Option"
                      top="20"
                    />
                  </div>
                  <div className="flex flex-col space-y-6">
                    <InputTag
                      type="text"
                      name="fullname"
                      lable="Full Name"
                      placeholder="Ex. Robert Jane"
                      value={name}
                      setFun={setName}
                    />
                    <InputTag
                      type="text"
                      name="phonenumber"
                      lable="Phone Number"
                      placeholder="Ex. 98765 43210"
                      pattern="[1-9]{1}[0-9]{9}"
                      value={phone}
                      setFun={setPhone}
                    />
                    <InputTag
                      type="email"
                      lable="Email"
                      name="email"
                      placeholder="Ex. robertjane@gmail.com"
                      value={email}
                      setFun={setEmail}
                    />

                    <InputTag
                      type="text"
                      placeholder=""
                      lable="PAN Number"
                      name="pan"
                      setFun={setPan}
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      value={pan}
                    />
                    <InputTag
                      type="text"
                      placeholder=""
                      lable="Your Message"
                      name="message"
                      setFun={setMessage}
                      value={message}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:w-1/2 xsm:w-full space-y-6 xsm:pt-6 lg:pt-0">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="Address" className="font-blod text-base">
                      Address
                    </label>
                    <textarea
                      name="Address"
                      className="w-full min-h-[155px] border  rounded-md  border-[#DCE0E4] indent-3 pt-2"
                      maxLength={250}
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      required
                    ></textarea>
                  </div>
                  <InputTag
                    type="number"
                    lable="Pin Number"
                    setFun={setPin}
                    value={pin}
                  />
                  <InputTag
                    type="text"
                    lable="City"
                    setFun={setCity}
                    value={city}
                  />
                  <InputTag
                    type="text"
                    lable="State"
                    setFun={setState}
                    value={State}
                  />
                  <InputTag
                    type="text"
                    lable="Country"
                    setFun={setCountry}
                    value={country}
                  />
                </div>
              </div>
              <div className="w-full mx-auto pt-6 pb-12">
                <div className="w-fit mx-auto ">
                  <button
                    className="mx-auto w-full bg-[#A15236] lg:px-28 xsm:px-10 py-4 rounded-full text-white text-xl flex space-x-2 "
                    type="submit"
                    disabled={disabled}
                  >
                    <span className="w">Donate Now</span>

                    <div>
                      <Image
                        src="/right.svg"
                        width={30}
                        height={30}
                        alt="right arrow"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
