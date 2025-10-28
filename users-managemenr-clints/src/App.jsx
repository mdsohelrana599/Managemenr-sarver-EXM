import "./App.css";
import Users from "./Components/users";

const usersPromise = fetch("http://localhost:4000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>Users Management</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  );
}

export default App;
