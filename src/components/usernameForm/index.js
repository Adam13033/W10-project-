import { useState } from "react";
import { signUp } from "../../utils";


export const UsernameForm = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    //fetch request to sign up
    signUp(username, email, password, setUser);
  };


  return (
    <div>


    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type={show ? "text" : "password"}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setShow(!show)}>Show password</button>
    </div>
    </div>
  );
};