import React from "react";
import Student from "./Student";
import Link from "next/link";

const StudentList = ({ studentList }) => {
  return (
    <div>
      StudentList
      {studentList.map((student, index) => {
        return (
          <>
            <Link href={`/students/${encodeURIComponent(student.id)}`}>
              <Student student={student} index={index} />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default StudentList;
