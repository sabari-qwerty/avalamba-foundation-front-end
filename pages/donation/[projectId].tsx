import { RazerPayFrom } from "@/components/common/RazerPayFrom";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  // const [value, setValue] = useState("temple");

  // const data = {
  //   temple: "The Temple",
  //   "vedic-traditions": "Vedic Traditions",
  //   "performing-arts": "Performing Arts",
  //   "research-documentation": "Research & Documentation",
  //   gauraksha: "Gauraksha",
  //   other: "Other Activtites",
  // };

  // const path = usePathname();
  // useEffect(() => {
  //   const last_path = String(path)
  //     .split("/")
  //     .splice(-1)[0]
  //     .split("-")
  //     .splice(-1)[0];

  //   setValue(last_path);

  //   return () => undefined;
  // });

  // const router = useRouter();
  // const pathname = router.pathname;
  // console.log(pathname);

  const [Value, setValue] = useState("temple");
  const path = usePathname();
  useEffect(() => {
    if (path) {
      const _data = path.split("/").splice(-1)[0].split("-").splice(-1)[0];
      setValue(_data);
    }
    return () => undefined;
  }, [path]);
  return <RazerPayFrom value={Value} />;
};

export default Index;
