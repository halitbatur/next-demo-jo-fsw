"use client";

import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "@/components/StudentList";
import GraduationList from "@/components/GraduationList";
import { useState } from "react";
const students = [
  {
    name: "Ranemm",
    country: "Jordan",
    city: "Madaba",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Khaled",
    city: "Istanbul",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Ammar",
    country: "UK",
    city: "London",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Derya",
    country: "Turkey",
    city: "Bursa",
    address: {
      street: "52",
      apartment: "30",
    },
  },
];

export default function Home() {
  const [showStudent, setShowStudent] = useState(false);
  // Create a form to take use input
  // Then use that user input and add it to the students array

  // When the user clicks on the showStudentList button
  // change the showStudent state to be true DONE
  // we should redender the student  component
  // and change the text on the button to be from show to hide

  const handleButtonClick = () => {
    setShowStudent((prevState) => {
      return !prevState;
    });
  };

  return (
    <main className={styles.main}>
      <button onClick={handleButtonClick}>
        {showStudent ? "Hide" : "Show"} Student List
      </button>
      {showStudent && <StudentList studentList={students} />}
      <GraduationList />
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
