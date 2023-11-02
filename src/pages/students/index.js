import React from "react";
import styles from "../../app/page.module.css";
import StudentList from "@/components/StudentList";

export const initialStudents = [
  {
    name: "Ranemm",
    country: "Jordan",
    city: "Madaba",
    id: "2135213",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Khaled",
    country: "Turkey",
    id: "341515",
    city: "Istanbul",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Kutay",
    country: "Turkey",
    city: "Sakarya",
    id: "51325",
    address: {
      street: "52",
      apartment: "30",
    },
  },
  {
    name: "Ammar",
    country: "UK",
    city: "London",
    id: "21355",
    address: {
      street: "52",
      apartment: "30",
    },
  },
];

// /students/51325

const Students = () => {
  return (
    <main
      className={styles.main}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div>Welcome to Students page</div>
      <StudentList studentList={initialStudents} />
    </main>
  );
};

export default Students;
