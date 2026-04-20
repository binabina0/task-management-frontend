import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Payments() {
    const [debts, setDepts] = useState([]);
    useEffect(() => {
        api.get("/payments/my")
        .then(res => {
            console.log(res.data);
            setDepts(res.data.data)})
            .catch(() => alert("Error loading paymanets"));
    }, []);
    return (
        <>
        <Navbar/>
        <div>
            <h2>Payments</h2>
            {debts.map(d => (
                <div className = "card" key={d.id}>
                    <strong>{d.amount} </strong>
                    <p>Status: {d.status}</p>
                </div>
            ))}
        </div>
        </>
        
    );
}