import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function Tasks() {
    const [tasks,setTasks] = useState([]);
    useEffect(() => {
        api.get("/tasks?page=0&size=10")
        .then(res => {
            console.log(res.data);
            setTasks(res.data.data.content)})
            .catch(() => alert("Error loading tasks"));
            
    }, []);
    return (
        <>
        <Navbar/>
        <div>
            <h2>Tasks</h2>
            {tasks.map(t => (
                <div className="card" key={t.id}>
                    <strong>{t.title}</strong>
                    <p>Status: {t.status}</p>
                    
                </div>
            ))}
        </div>
        </>
        
    );
}