import { Layout } from "@/components/Layout";
import { H1 } from "@/components/common/Heading/H1";
import { Section } from "@/components/common/Section/Section";
import { FC, FormEvent, useState } from "react";
import {
  CommonAmount,
  CurrencyType,
  DonationCatgery,
} from "../../../pages/CommonContent";
import { H2 } from "@/components/common/Heading/H2";
import { DropDown } from "@/components/DropDown";
import { InputTag } from "@/components/common/InputTag/InputTag";
import Image from "next/image";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import axios from "axios";
import { stringify } from "querystring";

const SubDonationCatgery = {
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

interface RazerPayFrom {
  value?: string;
}

export const RazerPayFrom: FC<RazerPayFrom> = ({ value }) => {
  const select = Object.keys(SubDonationCatgery).filter((data) =>
    data.toLowerCase().includes(String(value))
  );

  console.log();

  const [catgery, setCatgery] = useState(select[0] || "The Temple");
  const [amount, setAmount] = useState<number | any>();
  const [active, setActive] = useState(0);
  const [_option, setOption] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState();
  const [city, setCity] = useState("");
  const [State, setState] = useState("");
  const [country, setCountry] = useState("");

  const Razorpay = useRazorpay();

  const handlePayment = async () => {
    const res = await fetch("/api/example", {
      method: "POST",
      body: JSON.stringify({ amount, currency: CurrencyType[active] }),
    });
    // @ts-ignore
    const name_ = SubDonationCatgery[catgery];
    const sub_donation_catgery = name_[_option];

    const data = await res.json();
    console.log(data);
    const option: RazorpayOptions = {
      key: String(process.env.NEXT_PUBLIC_RAZORPAY_KEY),
      amount: String(amount),
      currency: CurrencyType[active],
      name: sub_donation_catgery,
      description: "Test Transaction",
      image: "/logo/logo.png",
      callback_url: "/#About-Us",
      order_id: data.id,
      handler: async (res: any) => {
        try {
          const sendData = {
            name: String(name),
            email: String(email),
            phone: String(phone),
            pan_number: String(pan),
            primary_category: String(catgery),
            sub_category: String(sub_donation_catgery),
            amount: String(amount),
            currency: String(CurrencyType[active]),
            message: String(message),
            address: String(address),
            pin_number: String(pin),
            city: String(city),
            state: String(State),
            country: String(country),
            razorpay_payment_id: String(res.razorpay_payment_id),
            razorpay_order_id: String(res.razorpay_order_id),
            razorpay_signature_id: String(res.razorpay_signature),
          };

          await axios.post("/api/createdb", sendData);
          await window.location.replace("/#About-Us");
          console.log("not error");
        } catch (err) {
          window.location.replace("/#About-Us");
          console.log({ err });
        }
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      notes: {
        catgery,
        sub_catgery: sub_donation_catgery,
      },
      theme: {
        color: "#A15236",
      },
    };

    const rzpay = new Razorpay(option);

    rzpay.open();

    rzpay.on("payment.capture", (pay: any) => {
      console.log("payment capture");
      console.log(pay);
    });

    rzpay.on("payment.captured", () => console.log("payment captured"));

    rzpay.on("payment.razorpay_payment_id", () => (res: any) => {
      console.log("Payment success:", res);
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <Layout>
      <Section className="space-y-14 flex xsm:flex-col relative">
        <div className="pt-14">
          <H1 text="Your Online Contributions Towards" />
        </div>
        <div className="w-[90%]  justify-center bg-[#A15236] text-white  rounded-2xl  py-3 px-8">
          <div className="w-full flex lg:justify-between  xms:justify-start flex-wrap xsm:px-2 lg:px-0 xsm:space-y-2 lg:space-y-0">
            {DonationCatgery.map((data: string, key: number) => (
              <span
                className={`text-xl  hover:bg-white py-3 px-6 rounded-lg duration-200 hover:text-[#A15236] font-medium ${
                  catgery == data ? "bg-white text-[#A15236]" : ""
                }`}
                key={key}
                onClick={() => setCatgery(data)}
              >
                {data}
              </span>
            ))}
          </div>
        </div>
        <div className="w-[90%] sticky top-[80px]  ">
          <H2 text={catgery} className="xsm:text-center lg:text-start w-full" />
        </div>
        <div className="w-full h-[1px] bg-[#EDEFF1]"></div>
        <div className="w-[90%]">
          <span className="font-blod p">Choose Amount</span>
          <div className="flex lg:justify-between xsm:justify-start xsm:gap-4 lg:gap-0 pt-8 flex-wrap ">
            {CommonAmount.map((data: number, key: number) => (
              <span
                onClick={() => {
                  setAmount(data);
                  console.log(data);
                }}
                key={key}
                className="text- py-3 px-6 rounded-lg bg-[#a152361a] font-bold "
              >
                ₹ {data}
              </span>
            ))}
          </div>
          <div>
            <form
              className="flex flex-col space-y-6 pt-8"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between lg:space-x-6 xsm:flex-col lg:flex-row ">
                <div className="lg:w-[30%] xsm:w-full   relative">
                  <DropDown
                    active={active}
                    setActive={setActive}
                    list={CurrencyType}
                    lable="Currency"
                  />
                </div>
                <div className="lg:w-[70%] xsm:w-full overflow-hidden">
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
                  <div className="relative">
                    <DropDown
                      active={_option}
                      setActive={setOption}
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
                      lable="Pan Number"
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
                <div className="flex flex-col lg:w-1/2 xsm:w-full space-y-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="Address" className="font-blod text-base">
                      Address
                    </label>
                    <textarea
                      name="Address"
                      className="w-full min-h-[155px] border  rounded-md  border-[#DCE0E4]"
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
              <div className="w-full mx-auto pt-6">
                <div className="w-fit mx-auto ">
                  <button
                    className="mx-auto w-full bg-[#A15236] px-36 py-4 rounded-full text-white text-xl flex space-x-2 "
                    type="submit"
                  >
                    <span>Donate Now</span>
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
