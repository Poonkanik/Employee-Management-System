import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_BASE = process.env.REACT_APP_API || "http://localhost:8080";

  const [emp, setEmp] = useState({
    name: "",
    role: "",
    email: "",
    experience: 0,
    salary: 0,
    backgroundCheck: false,
    degreeVerification: false,
  });

  // Load existing employee
  useEffect(() => {
    axios.get(`${API_BASE}/api/employees/${id}`)
      .then(res => setEmp(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_BASE}/api/employees/${id}`, emp);
      alert("Employee Updated");
      navigate("/home");
    } catch (err) {
      alert("Error updating employee");
    }
  };

  return (
    <div className="page-container">
      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>
        <input value={emp.name} onChange={(e)=>setEmp({...emp,name:e.target.value})} />
        {/* Add other inputs… */}
        <button type="submit" className="btn">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
            