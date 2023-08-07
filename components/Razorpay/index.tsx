import { FC, FormEvent, useEffect, useState } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { Button } from "@/components/common/Button/Button";
import axios from "axios";
import { stringify } from "querystring";
import { InputTag } from "@/components/common/InputTag/InputTag";

interface Pay {
  note: string;
}

export const Razorpay: FC<Pay> = ({ note }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [bool, setBool] = useState(false);

  const [data, setData] = useState<{ [key: string]: number }>({});

  const getData = async () => {
    await axios
      .get("/api/getAllAmount")
      .then((res) => res.data)
      .then((data) => {
        setData(data["data"]);
      });
  };

  useEffect(() => {
    getData();
    return () => undefined;
  }, []);

  const Razorpay = useRazorpay();

  // const response = async () => await fetch('/api/example', { method: "POST" })

  // const data = await response.json()

  const handlePayment = async () => {
    // const order = await createOrder(params);
    console.log(amount);

    const res = await fetch("/api/example", {
      method: "POST",
      body: JSON.stringify({ amount, currency }),
    });

    const data = await res.json();
    console.log(currency);
    const options: RazorpayOptions = {
      key: String(process.env.NEXT_PUBLIC_RAZORPAY_KEY),
      amount: String(amount),
      currency: currency,
      name: "Arulmigu Ramanathaswamy Temple",
      description: "Test Transaction",
      image: "/logo/logo.png",

      order_id: data.id,
      handler: async (res: any) => {
        try {
          const sendData = {
            name,
            email,
            pan_number: pan,
            phone_number: phone,
            amount,
            currency,
            razorpay_payment_id: res.razorpay_payment_id,
            razorpay_order_id: res.razorpay_order_id,
            razorpay_signature_id: res.razorpay_signature,
            template_headre: note,
          };

          // console.log(res)
          // console.log(sendData)

          await axios.post("/api/createdb", sendData);
          window.location.replace("/#About-Us");
        } catch (err) {
          window.location.replace("/#About-Us");
        }
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      notes: {
        note,
      },
      theme: {
        color: "#A15236",
      },
    };

    const rzpay = new Razorpay(options);

    rzpay.open();

    rzpay.on("payment.capture", (pay: any) => {
      console.log("payment sccess");
      console.log(pay);
    });
    rzpay.on("payment.captured", () => console.log(""));
    rzpay.on("payment.razorpay_payment_id", (response: any) => {
      // Handle the payment success event
      console.log("Payment success:", response);

      // Perform any necessary actions, such as updating the UI, sending notifications, etc.
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePayment();
  };
  const onChnagetAmount = (value: string) => {
    setAmount(value);
  };

  const Numbervalue = (e: string) => {
    if (Number(e) < 1) setAmount("1");
    else setAmount(e);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <InputTag
        lable="Name"
        placeholder="Ex. Robert Jane"
        name="na me"
        type="text"
        setFun={setName}
      />
      <InputTag
        lable="Email"
        placeholder="Ex. robertjane@gmail.com"
        name="email"
        type="email"
        setFun={setEmail}
      />
      <InputTag
        lable="Phone Number"
        placeholder="Ex. 98765 43210"
        name="phone"
        type="tel"
        setFun={setPhone}
        pattern="[1-9]{1}[0-9]{9}"
      />
      <InputTag
        lable="Pan Number"
        placeholder=""
        name="pan"
        type="text"
        setFun={setPan}
        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
      />
      {/* <input type="text" placeholder='name' name='name' value={name} onChange={(e) => setName(String(e.target.value))} required className='border-[.5px] py-1 rounded-lg border-[#000] indent-2' />

            <input type="email" placeholder='example@example.com' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='border-[.5px] py-1 rounded-lg border-[#000] indent-2' />
            <input type="text" placeholder='pan number' pattern='[A-Z]{5}[0-9]{4}[A-Z]{1}' name="pan" maxLength={10} value={pan} onChange={(e) => setPan(e.target.value)} required className='border-[.5px] py-1 rounded-lg border-[#000] indent-2' />
            <input type="tel" placeholder='phone number' name="phone_number" maxLength={10} value={phone} onChange={(e) => setPhone(e.target.value)} required className='border-[.5px] py-1 rounded-lg border-[#000] indent-2' /> */}
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <InputTag
            lable="Amount"
            name="Amount"
            type="number"
            value={amount}
            setFun={Numbervalue}
          />
          {/* <input type="number" onChange={(e) => console.log(typeof (e.target.value))} /> */}
        </div>
        <div className="lg:w-1/5 xsm:w-1/2 ">
          <div className="flex flex-col space-y-2 relative h-full  ">
            <div
              className="border-2 py-3 rounded-lg  indent-2 flex items-center justify-between"
              onClick={() => setBool(!bool)}
            >
              <span>{currency}</span>
              <div className={bool ? "-rotate-90" : "-rotate-0"}>
                <div className="px-2 ">
                  <svg
                    width="13"
                    height="6"
                    viewBox="0 0 13 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.245 0.0395038C12.1465 0.0393717 12.049 0.0587442 11.958 0.0965037C11.8671 0.134263 11.7845 0.189662 11.715 0.259504L7.87852 4.0955C7.76244 4.21161 7.62463 4.30372 7.47295 4.36655C7.32127 4.42939 7.1587 4.46174 6.99452 4.46174C6.83034 4.46174 6.66777 4.42939 6.51609 4.36655C6.36441 4.30372 6.2266 4.21161 6.11052 4.0955L2.28002 0.264504C2.21084 0.192871 2.12808 0.135734 2.03657 0.0964276C1.94507 0.0571209 1.84666 0.0364314 1.74707 0.035566C1.64749 0.0347007 1.54873 0.0536768 1.45656 0.0913875C1.36438 0.129098 1.28064 0.184788 1.21023 0.255207C1.13981 0.325627 1.08412 0.409366 1.0464 0.501538C1.00869 0.59371 0.989718 0.69247 0.990583 0.792055C0.991448 0.891639 1.01214 0.990054 1.05145 1.08156C1.09075 1.17306 1.14789 1.25582 1.21952 1.325L5.05002 5.156C5.56607 5.67109 6.2654 5.96038 6.99452 5.96038C7.72364 5.96038 8.42298 5.67109 8.93902 5.156L12.7755 1.32C12.8805 1.21511 12.952 1.08145 12.9809 0.935915C13.0099 0.790384 12.995 0.639532 12.9383 0.502445C12.8815 0.365359 12.7853 0.2482 12.6619 0.165793C12.5385 0.0833867 12.3934 0.0394365 12.245 0.0395038Z"
                      fill="#06152D"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className={
                bool
                  ? "flex flex-col space-y-2 pl-4 py-4  absolute bg-white w-full top-8 shadow-md "
                  : "hidden"
              }
            >
              <span
                onClick={() => {
                  setCurrency("INR");
                  setBool(!bool);
                }}
              >
                INR
              </span>
              <span
                onClick={() => {
                  setCurrency("USD");
                  setBool(!bool);
                }}
              >
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
      <Button
        text="Contribute Now"
        className="text-[#fff] bg-[#A15236] rounded-full "
      />
    </form>
  );
};
