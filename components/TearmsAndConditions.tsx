import { FC } from "react";
import { H2 } from "./common/Heading/H2";

const Tearms_And_conditions = [
  "Currently, we accept donations only in Indian rupees and only from Indian bank accounts.",
  "The approval for exemption under 80G is under process and status will be updated soon.",
  "You agree to share information entered on this page with us and razorpay, adhering to applicable laws of India.",
  "For refunds and cancellations, kindly contact us at contact@avalambafoundation.com",
];

export const TearmsAndConditions: FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      <H2 text="Terms and Conditions" className="w-full flex  p-0" />

      <ul className="list-disc flex flex-col space-y-4 pl-4">
        {Tearms_And_conditions.map((data, key) => (
          <li key={key} className="">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
};
