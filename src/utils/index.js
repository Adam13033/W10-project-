

export const signUp = async (username, email, password, setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    }
    setUser(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const tokenFetch = async (setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await res.json();
    setUser(data.user);
  } catch (error) {
    console.log(error);
  }
};