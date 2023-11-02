import React from "react";
import { initialStudents } from ".";
import Student from "@/components/StudentList/Student";
import { useRouter } from "next/router";

const SingleStudentPage = () => {
  const router = useRouter();

  const renderSelectedStudent = () => {
    const currentId = router.query.id;
    const currentStudent = initialStudents.find((el) => el.id === currentId);

    return currentStudent ? (
      <Student student={currentStudent} index={0} />
    ) : (
      <div>Student not found</div>
    );
  };

  return <div>{renderSelectedStudent()}</div>;
};

export default SingleStudentPage;
