import { useState } from "react";
import api from "../api/api";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const handleRegister = async () => {
        try {
            const res = await api.post("/auth/register", {
                email, 
                password,
                name
            });
            localStorage.setItem("token", res.data.token);
            window.location.href = "/";
        } catch (e) {
            alert("Registration failed")
        }
    };
    return(
        <div className="container">
            <h2>Register</h2>
            <input placeholder="Name" onChange={e => setName(e.target.value)}/>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}