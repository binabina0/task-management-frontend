import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Payments() {
    const [debts, setDepts] = useState([]);
    const load = () => {
        api.get("/payments/my")
        .then(res => setDepts(res.data.data));
    };
    useEffect(() => {
        load();
    }, []);
    const pay = async (id) => {
        await api.patch(`/payments/share/${id}/pay`);
        load();
    }
    return (
        <>
        <Navbar/>
        <div>
            <h2>Payments</h2>
            {debts.map(d => (
                <div className = "card" key={d.id}>
                    <strong>{d.amount} </strong>
                    <p>Status: {d.status}</p>
                    {d.status === "UNPAID" && (
                        <button onClick={() => pay(d.id)}>
                            Mark as paid
                        </button>
                    )}
                </div>
            ))}
        </div>
        </>
        
    );
}