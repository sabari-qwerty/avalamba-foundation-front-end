import { FC, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { useReactToPrint } from "react-to-print";

interface DonationDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  pan_number: string;
  primary_category: string;
  sub_category: string;
  amount: number;
  message: string;
  address: string;
  pin_number: string;
  state: string;
  country: string;
  city: string;
  marchantUserId: string;
  merchantTransactionId: string;
  createAt: Date | any | null;
  updateAt: Date | any | null;
}

const Projectid: FC = () => {
  const hadnlePrint = useReactToPrint({
    content: () => document.getElementById("print-area"),
  });
  const IdParams = useSearchParams();
  const id = IdParams.get("id");
  const [details, setDetails] = useState<DonationDetails>();
  const [formatDate, setFromDate] = useState<String>();

  useEffect(() => {
    axios.get(`/api/pdf?id=${id}`).then((data) => setDetails(data.data.data));
  }, [id]);

  if (!id) {
    return <div className="text-center">not valuide</div>;
  }

  const isoDate = new Date(details?.createAt);

  const options = { year: "numeric", month: "numeric", day: "numeric" };

  //   @ts-ignore
  const fromat_date = isoDate.toLocaleDateString("en-in", options);

  return (
    <Layout>
      <div
        id="print-area"
        className="w-full  mx-auto overflow-auto   flex justify-center items-center pt-12 relative"
      >
        <div className="min-w-[400px] w-[700px] max-w-[900px] border flex flex-col space-y-6">
          <div className="w-full flex justify-center items-center py-4 ">
            <Image
              src={"/mail/full_logo.svg"}
              width={150}
              height={240}
              className=""
              alt="logo"
            />
          </div>

          <div className="w-full">
            <h1 className="text-center text-lg font-bold">Donation Receipt</h1>
          </div>

          <div className="w-full flex space-y-6 flex-col px-6">
            <div>
              <span className="font-semibold">Date :</span>{" "}
              <span className="px-4"> {fromat_date}</span>
            </div>
            <div>
              <span className="font-semibold">Receipt Number :</span>
              <span className="px-4"> {details?.merchantTransactionId}</span>
            </div>

            <div>
              <span className="font-semibold">Donation made towards :</span>
              <span className="px-4">{details?.sub_category}</span>
            </div>

            <div>
              <span className="font-semibold">Full Name:</span>
              <span className="px-4">{details?.name}</span>
            </div>

            <div>
              <span className="font-semibold">Address :</span>
              <span className="px-4">{details?.address}</span>
            </div>

            <div>
              <span className="font-semibold">Pin Code :</span>
              <span className="px-4">{details?.pin_number}</span>
            </div>
            <div>
              <span className="font-semibold">Phone Number :</span>
              <span className="px-4">{details?.phone}</span>
            </div>
            <div>
              <span className="font-semibold">Pan :</span>
              <span className="px-4">{details?.pan_number}</span>
            </div>
            <div>
              <span className="font-semibold">Email :</span>
              <span className="px-4">{details?.email}</span>
            </div>
            <div>
              <span className="font-semibold">Donation Amount :</span>
              <span className="px-4">{details?.amount}</span>
            </div>
          </div>

          <div className="w-full flex justify-end  items-end flex-col px-6">
            <h2>For Avalamba Foundation</h2>
            <div>
              <Image
                src="/mail/signature.jpeg"
                alt="signature"
                width={200}
                height={150}
              />
            </div>
            <h2>For Avalamba Foundation</h2>
          </div>

          <div className="bg-[#fbf4ef] w-full text-center py-4 flex space-y-6 flex-col">
            <h2 className="text-xl font-semibold">Avalamba Foundation</h2>
            <address className="">
              Reg Address: 19/8, 2nd Floor, Suryaram <br />
              Aartments, Justice Sundaram Road, Mylapore, <br />
              Chennai 600004, Tamil Nadu, India, <br />
              www.avalambafoundation.com <br />
              Reg No:: 184/IV/2022 <br />
              PAN: AAJTA3643A <br />
            </address>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-20 w-fit h-fit  ">
        <button onClick={() => hadnlePrint()}>
          <div className=" py-4 px-6 bg-[#A15236] rounded-full drop-shadow-2xl flex justify-center items-center text-white font-bold ">
            {/* <Image
              src="/arrow.svg"
              width={35}
              height={35}
              alt="arrow"
              className="rotate-90"
            /> */}
            Download pdf
          </div>
        </button>
      </div>
    </Layout>
  );
};

export default Projectid;
