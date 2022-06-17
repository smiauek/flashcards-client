import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignInForm from "../user/SignInForm";

function SignIn() {
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

    //   await signIn(formData);

    setFormData({ ...initialFormState });
    navigate(`/`);
  };

  return (
    <>
      <h1>Sign In:</h1>
      <SignInForm formData={formData} handleChange={handleChange} />

      <button
        form="cardForm"
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
