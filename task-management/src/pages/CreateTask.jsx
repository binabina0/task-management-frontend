import { useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function CreateTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [groupId, setGroupId] = useState("");
    const [assignedToId, setAssignedToId] = useState("");

    const handleSubmit = async () => {
        try {
            await api.post("/task", {
                title,
                description,
                groupId,
                assignedToId
            });
            alert("Task created");
        } catch (e) {
            alert("Error creating task");
        }
    };
    return (
        <>
        <Navbar />
        <div className="container">
            <h2>Create Task</h2>
            <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
            <input placeholder="Group ID" onChange={e => setGroupId(e.target.value)} />
            <input placeholder="Assigned To ID" onChange={e => setAssignedToId(e.target.value)} />
            <button onClick={handleSubmit}>Create</button>
        </div>
        </>
    )
}
