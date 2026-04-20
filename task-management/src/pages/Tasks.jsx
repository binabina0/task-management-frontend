import { useEffect, useState } from "react";
import api from "../api/api";

export default function Tasks() {
    const [tasks,setTasks] = useState([]);
    useEffect(() => {
        api.get("/tasks?page=0&size=10")
        .then(res => setTasks(res.data.data.content));
    }, []);
    return (
        <div>
            <h2>Tasks</h2>
            {tasks.map(t => (
                <div className="card" key={t.id}>
                    <strong>{t.title}</strong>
                    <p>Status: {t.status}</p>
                    
                </div>
            ))}
        </div>
    );
}