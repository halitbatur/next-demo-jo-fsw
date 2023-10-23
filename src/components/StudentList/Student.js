import React from "react";

// Cookie maker
const Student = ({ student, index }) => {
  // console.log(student, index);
  // // console.log(props);
  return (
    <div>
      <div style={{ padding: "30px", margin: "30px", border: "1px solid red" }}>
        <h2>Student{index + 1}</h2>
        <h3>Name:{student.name}</h3>
        <h3>Country:{student.country ? student.country : "Egypt"}</h3>
        <h3>City:{student.city}</h3>
      </div>
    </div>
  );
};

// const { student, index } = props;
// console.log(props.student.name, props.index);
// // destructring
// const student = {
//   name: "Khaled",
//   country: "Turkey",
// };
// const { country } = student;
// console.log(country);

export default Student;
