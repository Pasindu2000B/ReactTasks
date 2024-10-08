import { useState } from "react";

function UserList() {
  let UserList = [
    { name: "saman", age: 23 },
    { name: "samantha", age: 25 },
    { name: "shanaka", age: 21 },
  ];

  const [users, setUsers] = useState(UserList);

  return (
    <div>
      <h1>User List</h1>
      <td>
        {users.map((u, i) => {
          return (
            <>
              <tr key={i}>{u.name}</tr>
              <tr key={i}>{u.age}</tr>
              <button
                onClick={() => {
                  setUsers([...users.slice(0, i), ...users.slice(i + 1)]);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </td>
    </div>
  );
}

export default UserList;
