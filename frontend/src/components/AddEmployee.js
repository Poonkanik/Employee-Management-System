import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddEmployee() {
  const [emp, setEmp] = useState({
    name: "", role: "", email: "", experience: 0, salary: 0,
    backgroundCheck: false, degreeVerification: false
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/employees", emp)
      .then(() => {
        alert("Employee added");
        navigate("/home");
      })
      .catch(err => {
        console.error(err);
        alert("Error adding employee");
      });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        {["name","role","email","experience","salary"].map(field => (
          <div className="form-group" key={field}>
            <label>{field.charAt(0).toUpperCase()+field.slice(1)}</label>
            <input
              type={field==="experience"||field==="salary"?"number":"text"}
              value={emp[field]}
              onChange={e=>setEmp({...emp,[field]:field==="experience"||field==="salary"?Number(e.target.value):e.target.value})}
              required
            />
          </div>
        ))}
        <div className="checkbox-group">
          <label>
            <input type="checkbox" checked={emp.backgroundCheck} onChange={e=>setEmp({...emp,backgroundCheck:e.target.checked})} />
            Background Check
          </label>
          <label>
            <input type="checkbox" checked={emp.degreeVerification} onChange={e=>setEmp({...emp,degreeVerification:e.target.checked})} />
            Degree Verification
          </label>
        </div>
        <button type="submit" className="btn">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
