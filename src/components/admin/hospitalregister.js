import React, { useState, useEffect } from "react";
import "./hospitalregister.css";

const Hospital = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [location, setLocation] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [departments, setDepartments] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  // Load hospitals from localStorage on mount
  useEffect(() => {
    const savedHospitals = JSON.parse(localStorage.getItem("hospitals")) || [];
    setHospitals(savedHospitals);
  }, []);

  const addDepartment = () => {
    const dept = departmentInput.trim();
    if (dept && !departments.includes(dept)) {
      setDepartments([...departments, dept]);
      setDepartmentInput("");
    }
  };

  const removeDepartment = (index) => {
    const updated = departments.filter((_, i) => i !== index);
    setDepartments(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!hospitalName.trim() || !location.trim() || departments.length === 0) {
      alert("Please enter all required fields and at least one department.");
      return;
    }

    const newHospital = {
      id: Date.now(),
      name: hospitalName.trim(),
      location: location.trim(),
      departments,
    };

    // Prevent duplicate hospital names
    if (hospitals.some((h) => h.name.toLowerCase() === newHospital.name.toLowerCase())) {
      alert("Hospital with this name already exists.");
      return;
    }

    const updatedHospitals = [...hospitals, newHospital];
    setHospitals(updatedHospitals);
    localStorage.setItem("hospitals", JSON.stringify(updatedHospitals));

    setHospitalName("");
    setLocation("");
    setDepartments([]);
  };

  return (
    <div className="hospital">
      <h2>Register Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>Hospital Name:</label>
        <input
          type="text"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="e.g., Hyderabad"
        />

        <label>Departments:</label>
        <div className="dept">
          <input
            type="text"
            value={departmentInput}
            onChange={(e) => setDepartmentInput(e.target.value)}
            placeholder="e.g., Cardiology"
          />
          <button type="button" onClick={addDepartment}>
            Add
          </button>
        </div>

        {departments.length > 0 && (
          <ul className="dept-list">
            {departments.map((dept, index) => (
              <li key={index}>
                {dept}
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeDepartment(index)}
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        )}

        <button type="submit" className="submit-btn">
          Register Hospital
        </button>
      </form>

      <h3>Registered Hospitals</h3>
      {hospitals.length === 0 ? (
        <p>No hospitals registered yet.</p>
      ) : (
        <ul>
          {hospitals.map((h) => (
            <li key={h.id}>
              <strong>{h.name}</strong> - {h.location}<br />
              Departments: {h.departments.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hospital;
