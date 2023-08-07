import { Layout } from "@/components/Layout";
import { Razorpay } from "@/components/Razorpay";
import { PercentageSlider } from "@/components/common/PercentageSlider/PercentageSlider";
import { Section } from "@/components/common/Section/Section";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const index = () => {
  const [showAmount, setShowAmount] = useState<{ [key: string]: number }>({});

  const getData = async () => {
    await axios
      .get("/api/getAllAmount")
      .then((res) => res.data)
      .then((data) => setShowAmount(data["data"]));
  };

  useEffect(() => {
    getData();
    return () => undefined;
  }, []);

  const projectid = "common";

  return (
    <Layout>
      <Section className="w-full lg:h-screen py-0 ">
        <div className="flex w-full h-full xsm:flex-col lg:flex-row ">
          <div className="lg:w-3/5 xsm:w-[90%] h-full flex  justify-center items-center flex-col space-y-8">
            <Image src={"/lamp.svg"} alt="lamp" width={200} height={200} />
            <h3 className="text-4xl font-semibold">
              Undecided about the project?....
            </h3>
            <p className="text-lg font-medium">
              you can still contribute to our general corpus.
            </p>
          </div>
          <div className=" lg:w-2/5 xsm:w-[90%] h-full bg-white drop-shadow-xl pt-20 space-y-4">
            <div className="mx-auto w-4/5">
              <h3 className="font-bold text-[24px]">Contribute</h3>
            </div>
            <div className="w-4/5 mx-auto">
              <PercentageSlider
                amount={"7000000"}
                days={3}
                perstage={(
                  (showAmount[projectid] / 700000) * 100 || 0.0
                ).toFixed(2)}
              />
            </div>
            <div className="w-4/5 mx-auto">
              <Razorpay note={projectid} />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default index;
