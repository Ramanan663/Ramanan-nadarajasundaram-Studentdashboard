import React from "react";
import { Link } from "react-router-dom";

const StudentsPage = (props) => {
  const studentLinks = props.students.map((item) => {
    const studentUrl = "/Students/Student/" + item;

    return (
      <li key={item}>
        <Link to={studentUrl}>{item}</Link>
      </li>
    );
  });

  //try
  // const randomPhone = () => {
  //   const lasteight = Math.round(Math.random() * (99999999 - 10000000));
  //   return "06-" + lasteight;
  // };

  // const randomAge = () => {
  //   return Math.round(Math.random() * (55 - 18) + 18);
  // };

  // const studentInfo= props.students.map((item) => {
  //   item.phone = randomPhone();
  //   item.email = `${item.name}@gmail.com`;
  //   item.age = randomAge();
  // });

  // }

  //try

  return (
    <div className="StudentsPage">
      <h1>Students</h1>
      <div className="ListBlock">
        <ul className="StudentsPageList">{studentLinks}</ul>
      </div>
    </div>
  );
};

export default StudentsPage;
