import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState();

  const { id } = useParams();

  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [phones, id]);


  return (
    <div className="flex justify-center items-center h-screen">
      <PhoneCard phone={phone}/>
    </div>
  );
};

export default Phone;
