import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [studentName, setStudentName] = useState("");

  return (
    <div style={{ margin: "24px" }}>
      <h3>Please write a student name you want to add to the list:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addStudent(studentName);
          setStudentName("");
        }}
      >
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        ></input>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
