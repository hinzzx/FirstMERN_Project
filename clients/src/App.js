import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const CreateUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      age: age,
      username: username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, { name, age, username }]);
    });
  };
  return (
    <div className="App">
      <header>
        <h1>Create new users:</h1>
      </header>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
            <h1>-----------{user.name} creditals -------------</h1>
              <h1>User: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
              
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={CreateUser}> Create user</button>
      </div>
    </div>
  );
}

export default App;
