import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const matched = doctors.find(
      (p) => p.username === username && p.password === password
    );

    if (matched) {
      localStorage.setItem("currentUser", JSON.stringify({ role: "doctor", username }));
      navigate("/doctor/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];

    const alreadyExists = doctors.find((p) => p.username === username);
    if (alreadyExists) {
      setError("Username already exists");
      return;
    }

    const newDoctor = {
      name,
      username,
      password,
      gender,
      department,
    };

    localStorage.setItem("doctors", JSON.stringify([...doctors, newDoctor]));
    localStorage.setItem("currentUser", JSON.stringify({ role: "doctor", username }));

    alert("Registration successful!");
    navigate("/doctor/dashboard");
  };

  return (
    <div className="login">
      <h2>Doctor {showRegister ? "Registration" : "Login"}</h2>

      {!showRegister ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            New here? <button onClick={() => setShowRegister(true)}>Register</button>
          </p>
        </>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br />
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select><br />
          <input
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          /><br />
          <button type="submit">Register & Login</button>
          <button type="button" onClick={() => setShowRegister(false)}>Back to Login</button>
        </form>
      )}
    </div>
  );
};

export default DoctorLogin;
