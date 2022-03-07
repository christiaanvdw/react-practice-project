import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username " type="text" onChange={userNameChangeHandler} />
        <label htmlFor="username">Age</label>
        <input id="username " type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
