import PhoneCard from "./PhoneCard";

/* eslint-disable react/prop-types */
const Phones = ({ phones }) => {
  return (
    <div className="py-10">
      <h1 className="text-2xl text-center">All Categories Phone</h1>

      <div className="grid lg:grid-cols-3 items-center justify-center md:grid-cols-2 grid-cols-1 gap-5">
        {phones.map((phone) => (
          <PhoneCard
            phone={phone}
            key={phone.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Phones;
