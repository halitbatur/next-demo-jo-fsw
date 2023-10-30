"use client";

import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "@/components/StudentList";
import GraduationList from "@/components/GraduationList";
import { useState, useEffect } from "react";
import StudentForm from "@/components/StudentForm";

const initialStudents = [
  {
    name: "Ranemm",
    country: "Jordan",
    city: "Madaba",
    address: {
      street: "52",
      apartment: "30",
    },
  },
];

export default function Home() {
  const [showStudent, setShowStudent] = useState(true);
  const [students, setStudents] = useState(initialStudents);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Create a form to take use input
  // Then use that user input and add it to the students array

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  console.log(data);

  // When the user clicks on the showStudentList button
  // change the showStudent state to be true DONE
  // we should redender the student  component
  // and change the text on the button to be from show to hide

  const addStudent = (studentName) => {
    setStudents((prevState) => {
      const copyPrevState = [...prevState];
      copyPrevState.push({
        name: studentName,
        country: "Turkey",
        city: "Istanbul",
        address: {
          street: "52",
          apartment: "30",
        },
      });
      return copyPrevState;
      // return [
      //   ...prevState,
      //   {
      //     name: studentName,
      //     country: "Turkey",
      //     city: "Istanbul",
      //     address: {
      //       street: "52",
      //       apartment: "30",
      //     },
      //   },
      // ];
    });
  };

  const handleButtonClick = () => {
    setShowStudent((prevState) => {
      return !prevState;
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data is found</p>;

  if (data?.message)
    return (
      <div>
        <p>Message:{data.message}</p>
        <a href={data.documentation_url} target="_blank">
          please visit docs
        </a>
      </div>
    );

  return (
    <main className={styles.main}>
      {/* <button onClick={handleButtonClick}>
        {showStudent ? "Hide" : "Show"} Student List
      </button>
      <div style={{ display: "flex", marginTop: "24px" }}>
        <StudentForm addStudent={addStudent} />
        {showStudent && <StudentList studentList={students} />}
        <GraduationList />
      </div> */}
      {data.map((user) => {
        return (
          <div>
            <p>Login: {user.login}</p>
            <p>id: {user.id}</p>
          </div>
        );
      })}
    </main>
  );
}

// const myName = "Khaled";

// // map
// // Arrray full of object that inlcude names age ,etc
// // Using map I can return an html element that renders these data in a different way

// const generateHelloMessage = (name) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>lorem impsum hello how are you </p>
//     </div>
//   );
// };
