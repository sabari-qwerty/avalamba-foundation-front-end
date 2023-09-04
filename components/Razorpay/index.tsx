import { FC, useState } from "react";
import { InputTag } from "../common/InputTag/InputTag";
import { DropDown } from "../DropDown";
import { CurrencyType, SubDonationCatgery } from "@/pages/CommonContent";
import { Button } from "../common/Button/Button";
import Image from "next/image";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import axios from "axios";
import { json } from "stream/consumers";

interface RazorpayFroms {
  catgery: string;
  amount: number;
}

export const RazorpayFroms: FC<RazorpayFroms> = ({ catgery, amount }) => {
  const [active, setActive] = useState(0);
  const [option, setOption] = useState(0);
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
  const [amount, setAmount] = useState(amount);

  const RazorPay = useRazorpay();

  const handlePayment = async () => {
    console.log(amount);

    const res = await axios.post("/api/example");
  };

  // console.log({ Amount });
  // console.log(catgery);
  return (
    <form className="flex flex-col space-y-6">
      <div className="flex justify-between space-x-6 ">
        <div className="w-[30%]  relative">
          <DropDown
            active={active}
            setActive={setActive}
            list={CurrencyType}
            lable="Currency"
          />
        </div>
        <div className="w-[70%] overflow-hidden">
          <InputTag
            lable="Other Amount"
            type="number"
            value={Amount}
            setFun={setAmount}
          />
        </div>
      </div>
      <div className="flex space-x-6 ">
        <div className="flex flex-col w-1/2 space-y-6 ">
          <div className="relative">
            <DropDown
              active={option}
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
        <div className="flex flex-col w-1/2 space-y-6">
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
            ></textarea>
          </div>
          <InputTag
            type="number"
            lable="Pin Number"
            setFun={setPin}
            value={pin}
          />
          <InputTag type="text" lable="City" setFun={setCity} value={city} />
          <InputTag type="text" lable="State" setFun={setState} value={State} />
          <InputTag
            type="text"
            lable="Country"
            setFun={setCountry}
            value={country}
          />
        </div>
      </div>
      <div className="w-full mx-auto">
        <div className="w-fit mx-auto ">
          <button
            className="mx-auto w-full bg-[#A15236] px-36 py-4 rounded-full text-white text-xl flex space-x-2 "
            type="submit"
          >
            <span>Donate Now</span>
            <div>
              <Image src="/right.svg" width={30} height={30} alt="" />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
