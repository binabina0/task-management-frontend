import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function Navbar() {

  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: 10, color: "white" }}>Dashboard</Link>
      <Link to="/tasks" style={{ marginRight: 10, color: "white" }}>Tasks</Link>
      <Link to="/payments" style={{ marginRight: 10, color: "white" }}>Payments</Link>

      <button onClick={logout} style={{ float: "right" }}>
        Logout
      </button>
    </div>
  );
}