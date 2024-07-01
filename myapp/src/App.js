import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => [...prevUsersList, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
};

export default App;
