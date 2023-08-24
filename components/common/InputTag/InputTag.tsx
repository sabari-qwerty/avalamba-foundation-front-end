import { FC } from "react";

interface InputTag {
  lable?: string;
  placeholder?: string;
  type?: "text" | "tel" | "email" | "number";
  pattern?: string;
  setFun?: any;
  value?: string | number | any;
  name?: string;
  drop?: boolean;
}

export const InputTag: FC<InputTag> = ({
  name,
  placeholder,
  type,
  pattern,
  setFun,
  value,
  lable,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="font-blod text-base">
        {lable}
      </label>
      <input
        pattern={pattern}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        className="rounded-md border-collapse border-2 py-4  text-xs indent-3"
        onChange={(e) => setFun(e.target.value)}
        required
      />
    </div>
  );
};
