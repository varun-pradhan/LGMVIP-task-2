import React, {useState} from "react";
import appStyles from "./App.css";

function App() {

  const [userData, setUserData] = useState([]);
   
  const fetchData = async function() {
    const url = "https://reqres.in/api/users?page=1";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data.data);
};

return (
  <div>
    <div className="navBar">
      <h2 className="logo">LetsGrowMore</h2>
      <button onClick ={fetchData} className="navButton">Get Users</button>
    </div>
    <h1 id="containerHeading">User Data</h1>
    <div className="container">
      {userData.map(function(user){
        return(
          <div className="card">
            <img src={user.avatar} key = {user.avatar} className="image" alt="logo512.png" />
            <h3 className="userName" key ={user.first_name}  >{user.first_name} {user.Last_name}</h3>
            <p className="mailId" key = {user.email} >{user.email}</p>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default App;