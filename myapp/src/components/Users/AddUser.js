import React from 'react';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    // Additional logic to handle form submission can be added here
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;