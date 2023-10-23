import React from "react";
import Student from "./Student";

const StudentList = ({ studentList }) => {
  return (
    <div>
      StudentList
      {studentList.map((student, index) => {
        return <Student student={student} index={index} />;
      })}
    </div>
  );
};

export default StudentList;
