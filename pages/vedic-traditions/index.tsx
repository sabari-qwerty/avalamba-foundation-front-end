import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { H1 } from "@/components/common/Heading/H1";
import { Section } from "@/components/common/Section/Section";
// import { H2 } from '@/components/common/Heading/H2'
// import { PercentageSlider } from '@/components/common/PercentageSlider/PercentageSlider'
// import { Button } from '@/components/common/Button/Button'
import { Paragraph } from "@/components/common/Paragraph/Paragraph";
// import { Projects_blog } from '../content'
import { PercentageSlider } from "@/components/common/PercentageSlider/PercentageSlider";
import Link from "next/link";

import axios from "axios";

const Projects_blog = [
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_one",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_two",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "haeding_three",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_forue",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_five",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_one",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "haeding_three",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_five",
  },
  {
    head: "25 quality collectors toys inspired by famous films",
    text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    prestage: 72,
    amout: 752628,
    dir: "heading_two",
  },
];

const Index: React.FC = () => {
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

  return (
    <Layout>
      {/* <H1 text='All' */}
      <Section>
        <div className="flex flex-col space-y-8 w-[90%] pt-12">
          <H1 text="Vedic Traditions" />
          <div className="flex xsm:flex-col lg:flex-row gap-y-8 justify-between flex-wrap ">
            {Projects_blog.map((i, k) => (
              <Link
                href={`/research-documentation/${i.dir}`}
                key={k}
                className="lg:w-1/3 xsm:w-full mx-auto  space-y-4  "
              >
                <div className="bg-white  xsm:w-[95%] lg:w-full  xsm:mx-auto lg:mx-0 shadow-md p-4 space-y-8 rounded-xl">
                  <div className=" mx-auto ">
                    <img
                      src="./Projects/Blog-1.jpg"
                      alt="Blog image"
                      className="w-full object-cover "
                    />
                  </div>
                  <div className=" mx-auto flex flex-col space-y-2  justify-center align-middle ">
                    <div className="flex flex-col space-y-2 justify-center ">
                      <h3 className="font-bold text-sm">{i.head}</h3>
                      <Paragraph text={i.text} className="xsm:text-[12px]" />
                    </div>
                    <div className="pb-4">
                      <PercentageSlider
                        amount={i.amout}
                        days={3}
                        perstage={(
                          (data[i.dir] / i.amout) * 100 || 0.0
                        ).toFixed(2)}
                      />
                      {/* <PercentageSlider amount={70000} days={3} perstage={(((data as any)[ i.dir ] / 70000) * 100).toFixed(2)} /> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
