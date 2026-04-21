import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function CreateTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [groupId, setGroupId] = useState("");
    const [assignedToId, setAssignedToId] = useState("");
    const [groups, setGroups] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        api.get("/groups/my")
        .then(res => setGroups(res.data.data))
    .catch(() => alert("Error loading groups"));
    }, []);
    useEffect(() => {
        if (!groupId) return;
        api.get(`/groups/${groupId}/members`)
        .then(res => setMembers(res.data.data))
        .catch(() => alert("Error loading members"));
    }, [groupId]);
    const handleSubmit = async () => {
        try {
            await api.post("/tasks", {
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
            <select onChange={e => setGroupId(e.target.value)}>
                <option value="">Select Group</option>
                {groups.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
            <select onChange={e => setAssignedToId(e.target.value)}>
                <option value="">Assign User</option>
                {members.map(m => (
                    <option key={m.id} value={m.id}>{m.name}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>Create</button>
        </div>
        </>
    )
}
