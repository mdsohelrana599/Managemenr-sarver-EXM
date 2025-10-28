import React, { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initislUsers = use(usersPromise);
  const [users, setUsers] = useState(initislUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const newUser = { name, email };

    // sent data to tha server
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      });
  };

  return (
    <>
      <div>
        <h3>Add a user</h3>
        <form onSubmit={handleAddUser}>
          <input name="name" type="text" />
          <br />
          <input type="email" name="email" id="" /> <br />
          <button>Add user</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} - Email: {user.email}
          </p>
        ))}
      </div>
    </>
  );
};

export default Users;

/**
 * have to send request object to tha server
 * 1. mention method: post
 * 2. mention header: about  json data in tha of "Content-Type": "application/json",
 * 3.  body: JSON.stringify(newUser)
 * ------------
 * 
 * on tha server side use json as middlewere
 * app.use(express.json())
  
 */
