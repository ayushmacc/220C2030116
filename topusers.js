import { useEffect, useState } from "react";
import { fetchUsers } from "../api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(data => setUsers(Object.entries(data).slice(0, 5)));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul>
        {users.map(([id, name]) => (
          <li key={id} className="p-2 bg-gray-100 mb-2 rounded">{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
