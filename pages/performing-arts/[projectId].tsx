import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { H2 } from "@/components/common/Heading/H2";
import { PercentageSlider } from "@/components/common/PercentageSlider/PercentageSlider";
// import { Button } from '@/components/common/Button/Button'
// import { Paragraph } from '@/components/common/Paragraph/Paragraph'
// import { Payicon, Projects_blog_data } from '../content'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { Pay } from './Pay'
import { Razorpay } from "@/components/Razorpay/oldindex";

interface heading {
  head: string;
  text: string[];
  img: string;
  prestage: number;
  amout: number;
  days: number;
}

interface data {
  heading_one: heading;
  heading_two: heading;
  haeding_three: heading;
  heading_forue: heading;
  heading_five: heading;
}

type dataType = {
  heading_one: heading;
  heading_two: heading;
  haeding_three: heading;
  heading_forue: heading;
  heading_five: heading;
};

const Projects_blog_data = () => ({
  heading_one: {
    head: "heading 1",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla pretium nunc, ut egestas mauris. Suspendisse ut diam eu neque viverra sodales. Proin tempor, enim non vulputate pellentesque, mi velit volutpat arcu, eget posuere magna odio ut tellus. Sed nec urna ac ante pretium tempus ut at dui. Sed dolor ex, efficitur eget rhoncus id, pretium at lorem. Nam nunc purus, pellentesque non tempor nec, cursus a dolor. Proin erat ipsum, tincidunt a condimentum et, eleifend ac felis. Nunc consectetur leo sed varius pretium. Praesent quis scelerisque purus. Nunc pharetra ac leo vel ultrices. In sed lorem viverra felis dictum volutpat non vel lorem. Vivamus vel pellentesque elit. ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla pretium nunc, ut egestas mauris. Suspendisse ut diam eu neque viverra sodales. Proin tempor, enim non vulputate pellentesque, mi velit volutpat arcu, eget posuere magna odio ut tellus. Sed nec urna ac ante pretium tempus ut at dui. Sed dolor ex, efficitur eget rhoncus id, pretium at lorem. Nam nunc purus, pellentesque non tempor nec, cursus a dolor. Proin erat ipsum, tincidunt a condimentum et, eleifend ac felis. Nunc consectetur leo sed varius pretium. Praesent quis scelerisque purus. Nunc pharetra ac leo vel ultrices. In sed lorem viverra felis dictum volutpat non vel lorem. Vivamus vel pellentesque elit. ",
    ],
    img: "/HeroPage/1.jpg",
    prestage: 72,
    amout: 752628,
    days: 3,
  },
  heading_two: {
    head: "heading 2",
    text: ["text"],
    img: "/HeroPage/2.jpg",
    prestage: 72,
    amout: 752628,
    days: 3,
  },
  haeding_three: {
    head: "heading 3",
    text: ["text"],
    img: "/HeroPage/3.jpg",
    prestage: 72,
    amout: 752628,
    days: 3,
  },
  heading_forue: {
    head: "heading 4",
    text: ["text"],
    img: "/HeroPage/4.jpg",
    prestage: 72,
    amout: 752628,
    days: 3,
  },
  heading_five: {
    head: "heading 5",
    text: ["text"],
    img: "/HeroPage/5.jpg",
    prestage: 72,
    amout: 752628,
    days: 3,
  },
});

const ShowProject: FC = () => {
  const queryClient = useQueryClient();

  const [amount, setAmount] = useState(0);

  console.log({ amount });

  const router = useRouter();
  const ProjectID = router.query.projectId as string;

  const getDataFun = async () =>
    await axios
      .get("/api/getAllAmount")
      .then((data) => data)
      .catch((err) => console.error(err));

  const data =
    Projects_blog_data()[
      ProjectID as
        | "heading_one"
        | "heading_two"
        | "haeding_three"
        | "heading_forue"
        | "heading_five"
    ];

  const mutation = useMutation({
    mutationFn: () => getDataFun(),
    onSuccess: () => queryClient.invalidateQueries(),
  });

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

  return (
    <Layout>
      <div className=" flex mx-auto w-[90%]   mt-20 relative xsm:flex-col lg:flex-row ">
        {/* <button onClick={() => console.log(num)}>butto</button> */}
        {/* <div className=' h-full w-3/5 mt-20  ' >
                        <div className='w-[95%]  mx-auto flex flex-col space-y-8'>
                            <div>

                                <H2 text='25 quality collectors toys inspired by famous films' className='text-start text-3xl' />
                            </div>
                            <div>
                                <img src="/HeroPage/4.jpg" alt="" />
                            </div>
                            <div>
                                <p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.

                                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>
                            </div>
                        </div>

                    </div>
                    <div className='bg-[#f00] h-full w-2/5'>
                        a
                    </div> */}

        <div className="h-full lg:w-3/5 xsm:w-full overflow-auto">
          <div className="w-[90%]  mx-auto flex flex-col space-y-8 ">
            <div className="w-[95%]  mx-auto flex flex-col space-y-8">
              <div className="pt-8">
                <H2 text={String(data?.head)} className="text-start text-3xl" />

                {/* <H2 text='25 quality collectors toys inspired by famous films' className='text-start text-3xl' /> */}
              </div>
              <div>
                <img src={data?.img} alt="img" />
                {/* <img src="/HeroPage/4.jpg" alt="" /> */}
              </div>
              <div className="flex flex-col space-y-4">
                {data?.text.map((i: string, k: number) => (
                  <p key={k}>{i}</p>
                ))}
                {/* <p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.

                                </p>
                                <p>
                                    Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                                    Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
                                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-2/5 xsm:w-full sticky top-10   pt-8   h-full flex space-y-8 ">
          <div className="w-[90%]   mx-auto flex flex-col space-y-6  ">
            <div className="mx-auto w-4/5">
              <h3 className="font-bold text-[24px]">Contribute</h3>
            </div>
            <div className="w-4/5 mx-auto">
              {/* <div>{showAmount[ ProjectID ]} </div> */}

              <PercentageSlider
                amount={data?.amout}
                days={data?.days}
                perstage={(
                  (showAmount[ProjectID] / Number(data?.amout)) * 100 || 0.0
                ).toFixed(2)}
              />
            </div>

            <div className="w-4/5 mx-auto">
              <Razorpay note={ProjectID} />

              {/* <RayzerPay note={ProjectID} fun={mutation} /> */}
            </div>

            {/* <div className='w-4/5  mx-auto '>
                            <Button text="Contribute Now" className='text-[#fff] bg-[#A15236] rounded-full ' />
                        </div> */}

            {/* <div className='w-4/5 mx-auto'>
                            <Paragraph className='text-center' text='Card, Netbanking, Cheque pickups' />
                        </div>

                        <div className='w-4/5 mx-auto'>
                            <p className='center-line'>Or Using QR</p>
                        </div>

                        <div className='w-4/5 mx-auto flex justify-center'>
                            <img src="/QR/QR_Code.png" alt="qr" />
                        </div>
                        <div className='w-4/5 mx-auto'>
                            <p className='text-center  '>Scan & donate with any app</p>
                        </div>
                        <div className='w-4/5 mx-auto flex justify-between'>
                            {
                                Payicon.map((i, k) => <div key={k} className='border-[1px] border-[#000] w-14 h-14 flex items-center justify-center m-auto rounded-full'>{i.svg}</div>)
                            }
                        </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowProject;
