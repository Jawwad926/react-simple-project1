import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  const addNewUserData = (uName, uAge) => {
    setUsersData((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addNewUserData} />
      <UserList users={usersData} />
    </Fragment>
  );
};

export default App;
