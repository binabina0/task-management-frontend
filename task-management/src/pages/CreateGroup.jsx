import { useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function CreateGroup() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const handleCreate = async () => {
        try {
            await api.post("/groups", {
                name, description
            });
            alert("Group created");
        } catch {
            alert("Errror creating group");
        }
    };
    return (
        <>
        <Navbar/>
        <div className="container">
            <h2>Create group</h2>
            <input placeholder="Name" onChange={e => setName(e.target.value)}/>
            <input placeholder="Description" onChange={e => setDescription(e.target.value)}/>
            <button onClick={handleCreate}>Create</button>
        </div>
        </>
    )
} 