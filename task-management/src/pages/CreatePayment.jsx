import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function CreatePayment() {
    const [groups, setGroups] = useState([]);
    const [members, setMembers] = useState([]);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [groupId, setGroupId] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);
    useEffect(() => {
        api.get("/groups/my")
        .then(res => setGroups(res.data.data))
    }, []);
    useEffect(() => {
        if (!groupId) return;   
        api.get(`/groups/${groupId}/members`)
        .then(res => setMembers(res.data.data))
    }, [groupId]);
    const toggleUser = (id) => {
        setSelectedUsers(prev =>
            prev.includes(id)
            ? prev.filter(u => u !== id)
            : [...prev, id]
        );
    };
    const handleSubmit = async () => {
        try {
            await api.post("/payments", {
                groupId,
                amount,
                description,
                participantsIds: selectedUsers
            });
            alert("Payment created");
        } catch (e) {
            alert("Error adding payment");
        }
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <h2>Create Payment</h2>
                <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
                <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
                <select onChange={e => setGroupId(e.target.value)}> 
                    <option>Select Group</option>
                    {groups.map(g =>
                        <option key={g.id} value={g.id}>{g.name}</option>
                    )}
                </select>
                <div>
                    <h4>Select Participants</h4>
                    {members.map(m => (
                        <div key={m.id}>
                            <label>
                                <input
                                type="checkbox"
                                onChange={() => toggleUser(m.id)}
                                />
                                {m.name}
                            </label>
                        </div>
                    ))}
                </div>
                <button onClick={handleSubmit}>Create</button>
            </div>

        </>
    );
}