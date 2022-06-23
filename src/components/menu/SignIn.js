import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignInForm from "../user/SignInForm";
import { signIn, getUserDetails } from "../../utils/api";

function SignIn({ setUser }) {
  const navigate = useNavigate();

  const initialFormState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    let response = await signIn(formData);

    let temp = response.split(" ");

    let username = temp[0];
    let token = temp[1];

    localStorage.setItem("token", token);

    let userDetails = await getUserDetails(username);

    setUser(userDetails);

    localStorage.setItem("username", userDetails.username);
    localStorage.setItem("userId", userDetails.userId);
    localStorage.setItem("email", userDetails.email);

    setFormData({ ...initialFormState });
    navigate(`/dashboard`);
  };

  return (
    <>
      <h1>Sign In:</h1>
      <SignInForm formData={formData} handleChange={handleChange} />

      <button
        form="signInForm"
        type="submit"
        className="btn btn-primary"
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <Link to={`/`}>
        <button className="btn btn-secondary mr-2">Cancel</button>
      </Link>
    </>
  );
}

export default SignIn;
