import React from "react";
import Student from "../StudentList/Student";

const student = {
  name: "Ranemm",
  country: "Jordan",
  city: "Madaba",
  address: {
    street: "52",
    apartment: "30",
  },
};

const GraduationList = () => {
  return (
    <div>
      Graduation List:
      <Student student={student} index={0} />
    </div>
  );
};

export default GraduationList;
