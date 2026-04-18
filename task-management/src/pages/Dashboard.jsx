import { useEffect, useState } from "react";
import api from "../api/api";

export default function Dashboard() {
    const [data, setData] = useState(null);
    useEffect(() => {
        api.get("/dashboard")
        .then(res => setData(res.data.data))
        .catch(() => alert("Error loading dashboard"));
    }, []);
    if (!data) return <p>Loading</p>;
    return (
        <div>
            <h2>Dashboard</h2>
            <h3>Deadlines</h3>
            {data.upcomingDeadlines.map((t, i) => (
                <div key={i}>
                    {t.title} - {t.deadline}
                </div>
            ))}
            <h3>Pyamnets</h3>
            <p>Owed: {data.paymentSummary.totalOwed}</p>
            <p>Paid: {data.paymentSummary.totalPaid}</p>
        </div>
    );
}