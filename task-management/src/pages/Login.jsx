import { useState, useContext, useEffect } from "react";
import api from "../api/api";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {token} = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(token) navigate("/");
    }, [token]);

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {email, password});
            login(res.data.data.token);
            navigate("/")
        } catch (e)  {
            alert("Login failed");
        }
    };
    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
        </div>
    )
}