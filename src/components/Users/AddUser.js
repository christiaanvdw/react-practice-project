import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username " type="text" />
        <label htmlFor="username">Age</label>
        <input id="username " type="number" />
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
