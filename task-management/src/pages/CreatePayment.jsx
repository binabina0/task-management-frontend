import { useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function CreatePayment() {
    const [groupId, setGroupId] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [participants, setParticipants] = useState("");
    const handleSubmit = async () => {
        const ids = participants.split(",").map(id => id.trim());
        try {
            await api.post("/payments", {
                groupId,
                amount,
                description,
                participantIds: ids
            });
            alert("Payment added");
        } catch (e) {
            alert("Error adding payment");
        }
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Create Payment</h2>
                <input placeholder="Group ID" onChange={e => setGroupId(e.target.value)} />
                <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
                <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
                <input placeholder="Participants IDs (comma separated)" onChange={e => setParticipants(e.target.value)} />
                <button onClick={handleSubmit}>Create</button>
            </div>

        </>
    );
}