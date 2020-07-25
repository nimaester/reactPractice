import React from "react";

const Logged = () => {
  return (
    <React.Fragment>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Logged;
