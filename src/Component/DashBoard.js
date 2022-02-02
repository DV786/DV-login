import React from "react";

export default function DashBoard() {
  const [users, setUsers] = React.useState([]);

  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="App">
        <h1>Hello ReqRes users!</h1>
        <div className="grid">
          {users.length &&
            users.map((user) => {
              return (
                <div className="user" key={user.id}>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} />
                </div>
              );
            })}
        </div>
        <div className="Logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
