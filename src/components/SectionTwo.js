import React from "react";

const SectionTwo = ({name,age,email,phone}) => {
  return (
    <div>
    <h3>Name:<span>{name}</span></h3>
    <h3>Age:<span>{age}</span></h3>
    <h3>Email:<span>{email}</span></h3>
    <h3>Phone:<span>{phone}</span></h3>
    </div>
  );
};
export default SectionTwo;