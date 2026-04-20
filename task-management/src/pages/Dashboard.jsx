import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    const [data, setData] = useState(null);
    useEffect(() => {
        api.get("/dashboard")
        .then(res => setData(res.data.data))
        .catch(() => alert("Error loading dashboard"));
    }, []);
    if (!data) return <p>Loading</p>;
    return (
        <>
            <Navbar/>
                <div className="container">
                <h2>Dashboard</h2>
                <div className="card">
                    <h3>Tasks</h3>
                    <p>Total: {data.taskSummary.total}</p>
                    <p>Done: {data.taskSummary.done}</p>
                </div>
                <div className="card">
                    <h3>Deadlines</h3>
                {data.upcomingDeadlines.map((t, i) => (
                    <div key={i}>
                        {t.title} - {t.deadline}
                    </div>
                ))}
                </div>
                
                <div className="card">
                    <h3>Paymnets</h3>
                <p>Owed: {data.paymentSummary.totalOwed}</p>
                <p>Paid: {data.paymentSummary.totalPaid}</p>
                </div>
                
            </div>
        </>
        
        
    );
}