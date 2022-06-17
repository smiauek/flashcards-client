import React from "react";

function Account({ user, setUser }) {
  return (
    <>
      <h1>Account:</h1>
      <br />
      <p>
        <b>Username: </b>
        {user.username}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
    </>
  );
}

export default Account;
