import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
