import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, role } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(username, password);

    if (!success) {
      setError("Invalid username or password");
      return;
    }

    if (role === "ADMIN") navigate("/");
    if (role === "DOCTOR") navigate("/doctor");
    if (role === "PATIENT") navigate("/patient");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        marginTop: "150px",
        padding: "30px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        MediFlow Login
      </h2>

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            fontSize: "16px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2B6CB0",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
