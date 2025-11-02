import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const [employees, setEmployees] = useState([]); // initialize empty array

useEffect(() => {
  axios.get("https://employee-management-system-2-lyxx.onrender.com")

    .then(res => {
      console.log("API Response:", res.data);
      setEmployees(res.data);
    })
    .catch(err => console.error("API Error:", err));
}, []);


  return (
    <div className="page-container">
      <h2 className="page-title">Employee List</h2>
      <Link to="/add-employee"><button className="btn">Add New Employee</button></Link>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
           {Array.isArray(employees) && employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.email}</td>
                <td>{emp.experience}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
