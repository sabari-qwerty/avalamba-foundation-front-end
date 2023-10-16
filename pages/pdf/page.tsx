import { FC } from "react";

interface page {
  name: string;
  email: string;
  phone: string | number;
  amount: string | number;
}

const PdfPage: FC<page> = ({ name, email, phone }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
    </div>
  );
};

export default PdfPage;
