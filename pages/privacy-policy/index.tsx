import { Layout } from "@/components/Layout";
import { H1 } from "@/components/common/Heading/H1";
import { H2 } from "@/components/common/Heading/H2";
import { Paragraph } from "@/components/common/Paragraph/Paragraph";
import { link } from "fs";
import { FC } from "react";

const Data_Collection = [
  "Your data is collected for the purpose of processing payments (donations).",
  "While donating via our website, you agree to share information entered, with us and razorpay,  adhering to applicable laws of India.",
  "We do not collect or track your data when you visit our website, unless you voluntarily provide  us with your personal information under “contact us“ form and while making payments. ",
  "256-bit AES (Advanced Encryption Standard) technology for encryption is used for collecting  data through our website and we use SSL technology to protect your credit card information which you may use for payments. ",
  "The collected personal data will not be traded or sold to other organisations at any point.",
  "We may use your email id to keep you updated about our project status, upcoming events and fund-raising campaigns from time to time. ",
  "We have ensured adequate fire wall infrastructure to address security vulnerabilities and prevent unauthorised access to data.",
  "Please visit razorpay website to know more about their policy on data security. ",
];

const Refund_and_cacellation = [
  "Currently, we accept donations only in Indian rupees and only from Indian bank accounts.",
  "The approval for exemption under 80G is under process and status will be updated soon. ",
  "For refunds and cancellations, kindly contact us at contact@avalambafoundation.com within 7 days from date of payment.",
];

const copayright = [
  "All the contents in the website including images, logos, creatives, audio and video clips are the exclusive property of Avalamba Foundation and other copyright owners.",
  "Any reproduction, modification or distribution of content without the prior permission of Avalamba Foundation will be a violation of Indian and International Laws. ",
];

const index: FC = () => {
  return (
    <Layout>
      <main className="w-4/5 mx-auto flex flex-col space-y-12 pt-8 ">
        <div className="py-4">
          <H1 text="Avalamba Foundation Provacy Policy" />
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="font-bold  text-xl ">
            Privacy Policy, Terms and Conditions.{" "}
          </h2>
          <Paragraph
            text="By using our website, you agree to all the terms conditions and privacy policies. You agree to not use 
the website for any purpose that’s unlawful or prohibited under Indian rules & laws. "
            className=""
          />
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="font-bold  text-xl ">Data Collection</h2>
          <Paragraph
            text="We at Avalamba respect your data’s privacy and have implemented the following policies regarding 
your personal information. "
            className=""
          />
          <ul className="list-disc flex flex-col space-y-3 px-5">
            {Data_Collection.map((data, key) => (
              <li key={key}>{data}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="font-bold  text-xl ">Refund and Cancellations </h2>
          <ul className="list-disc flex flex-col space-y-3 px-5 ">
            {Refund_and_cacellation.map((data, key) => (
              <li key={key}>{data}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="font-bold  text-xl ">Copyright</h2>
          <ul className="list-disc flex flex-col space-y-3 px-5">
            {copayright.map((data, key) => (
              <li key={key}>{data}</li>
            ))}
          </ul>
        </div>
        <div>
          Avalamba Foundation reserves its rights to update the privacy policy
          from time to time as deemed appropriate keeping in mind constant
          changes in data protection and relevant laws. Please keep yourself
          updated by visiting our website.
        </div>
      </main>
      {/* <H2 text="Privacy Policy, Terms and Conditions. " className="text-left" /> */}
    </Layout>
  );
};

export default index;
