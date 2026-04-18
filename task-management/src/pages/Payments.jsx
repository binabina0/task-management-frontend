import { useEffect, useState } from "react";
import api from "../api/api";

export default function Payments() {
    const [debts, setDepts] = useState([]);
    useEffect(() => {
        api.get("/payments/my")
        .then(res => setDepts(res.data));
    }, []);
    return (
        <div>
            <h2>Payments</h2>
            {debts.map(d => (
                <div key={d.id}>
                    {d.amount} - {d.status}
                </div>
            ))}
        </div>
    );
}