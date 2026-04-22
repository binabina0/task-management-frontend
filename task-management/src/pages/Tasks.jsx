import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Tasks() {
    const [tasks,setTasks] = useState([]);
    const loadTasks = () => {
        api.get("/tasks?page=0&size=10")
            .then(res => setTasks(res.data.data.content)
        );
    };
    useEffect(() => {
        loadTasks();
    }, []);
    const updateStatus = async (id, status) => {
        await api.patch(`/tasks/${id}/status?status=${status}`);
        loadTasks();
    }
    return (
        <>
        <Navbar/>
        <div>
            <h2>Tasks</h2>
            {tasks.map(t => (
                <div className="card" key={t.id}>
                    <strong>{t.title}</strong>
                    <p>Status: {t.status}</p>
                    <button onClick={() => updateStatus(t.id, "TODO")}>TODO</button>
                    <button onClick={() => updateStatus(t.id, "IN_PROGRESS")}>IN_PROGRESS</button>
                    <button onClick={() => updateStatus(t.id, "DONE")}>DONE</button>
                    
                </div>
            ))}
        </div>
        </>
        
    );
}