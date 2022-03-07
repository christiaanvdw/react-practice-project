import React from "react";

import Card from "../UI/Card";

const AddUser = (props) => {

  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username " type="text" />
        <label htmlFor="username">Age</label>
        <input id="username " type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
