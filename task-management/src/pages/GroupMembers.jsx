import { useEffect, useState } from "react";
import api from "../api/api";
import Navbar from "../components/Navbar";

export default function GroupMembers() {
    const [members, setMembers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupId, setGroupId] = useState(null);
    const [userId, setUserId] = useState("");
    useEffect(() => {
        api.get("/groups/my").then(res => setGroups(res.data.data));
    }, []);
    useEffect(() => {
        if(!groupId) return;
        api.get(`/groups/${groupId}/members`).then(res => setMembers(res.data.data));
    }, [groupId]);
    const addMember = async () => {
        await api.post(`/groups/${groupId}/members?userId=${userId}&role=MEMBER`);
        alert("Added");
    };
    const changeRole = async (userId, role) => {
        await api.patch(`/groups/${groupId}/members/${userId}/role?role=${role}`); 
        alert("Role updated");  
    };
    return (
        <>
            <Navbar/>
            <div className="container">
            <h2>Group members</h2>
            <select onChange={e => setGroupId(e.target.value)}>
            <option>Select group</option>
            {groups.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
            ))}
            </select>
            <input placeholder="user ID" onChange={e => setUserId(e.target.value)}/>
            <button onClick={addMember}> Add member</button>
            {members.map(m => (
                <div className="card" key={m.id}>
                    <strong>{m.name} </strong>
                    <p>{m.email}</p>
                    <button onClick={() => changeRole(m.id, "ADMIN")}>
                        Make admin
                    </button>
                    <button onClick={() => changeRole(m.id, "MEMBER")}>
                        Make member
                    </button>
                </div>
            ))}
            </div>
        </>
    );
}