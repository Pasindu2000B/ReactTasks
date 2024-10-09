import { useState } from "react";

function InputComponenet(name, disability) {
  const [val, setVal] = useState(name);
  return (
    <input
      disabled={disability}
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    ></input>
  );
}

function UserList() {
  let UserList = [
    { name: "saman", age: 27, disabel: true, salary: 23000 },
    { name: "samantha", age: 25, disabel: true, salary: 45000 },
    { name: "shanaka", age: 29, disabel: true, salary: 23000 },
  ];

  const [users, setUsers] = useState(UserList);

  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.map((u, i) => {
          return (
            <>
              <div>
                <InputComponenet
                  disability={u.disabel}
                  name={u.name}
                ></InputComponenet>
                <input key={i} value={u.age} disabled={u.disabel}></input>

                <button
                  onClick={() => {
                    setUsers([...users.slice(0, i), ...users.slice(i + 1)]);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setUsers(
                      users.map((user, index) => {
                        return index === i
                          ? { ...user, disabel: !user.disabel }
                          : user;
                      })
                    );
                  }}
                >
                  Edit
                </button>
              </div>
            </>
          );
        })}
      </div>
      <h1>
        {users.reduce((salaryAccu, u) => {
          return (salaryAccu = salaryAccu + u.salary);
        }, 0)}
      </h1>
      <h2>
        {users.reduce((oldest, u) => {
          return oldest < u.age ? (oldest = u.age) : oldest;
        }, 0)}
      </h2>
    </div>
  );
}

export default UserList;
