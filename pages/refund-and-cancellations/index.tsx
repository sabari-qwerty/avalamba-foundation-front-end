import { Layout } from "@/components/Layout";
import { H1 } from "@/components/common/Heading/H1";
import { FC } from "react";

const Refund_and_cacellation = [
  "Currently, we accept donations only in Indian rupees and only from Indian bank accounts.",
  "The approval for exemption under 80G is under process and status will be updated soon. ",
  "For refunds and cancellations, kindly contact us at contact@avalambafoundation.com within 7 days from date of payment.",
];

const Index = () => {
  return (
    <Layout>
      <main className="w-4/5 mx-auto flex flex-col space-y-12 pt-8 lg:h-screen  ">
        <section className="pt-[60px] pb-[60px]">
          <div className="flex flex-col  ">
            <H1
              text=" Refund and Cancellation Policy"
              className="lg:text-4xl  lg:font-bold"
            />
          </div>
        </section>

        <div className="flex flex-col space-y-6">
          <h2 className="font-bold  text-xl ">
            Refund and Cancellation Policy
          </h2>
          <ul className="list-disc text-lg flex flex-col space-y-3 px-5 ">
            {Refund_and_cacellation.map((data, key) => (
              <li key={key}>{data}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
