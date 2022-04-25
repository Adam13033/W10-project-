import { useState, useEffect } from "react";
import { UsernameForm } from "./components/usernameForm";
import {  tokenFetch } from "./utils";
import { NewsFeed } from "./components/photoBox";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();


  useEffect(() => {
    tokenFetch(setUser);
  }, []);
  

  return (
    <div className="App">
      {user && <button onClick={() => setUser()}>Logout</button>}
      {!user ? <UsernameForm setUser={setUser} /> : <NewsFeed />}

      
    </div>
  );
};

export default App;