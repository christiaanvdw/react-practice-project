import React from "react";

const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id='username 'type="text"/>
      <label htmlFor="username">Age</label>
      <input id='username 'type="number"/>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
