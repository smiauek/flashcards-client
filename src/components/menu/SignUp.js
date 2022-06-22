import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../user/UserForm";
import { createUser } from "../../utils/api";

function SignUp() {
  const navigate = useNavigate();

  const initialFormState = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    await createUser(formData);

    setFormData({ ...initialFormState });
    navigate(`/sign-in`);
  };

  return (
    <>
      <h1>Create Account:</h1>
      <UserForm formData={formData} handleChange={handleChange} />
      <button
        form="cardForm"
        type="submit"
        className="btn btn-primary"
        onClick={handleSave}
      >
        Save
      </button>
      <Link to={`/`}>
        <button className="btn btn-secondary mr-2">Cancel</button>
      </Link>
    </>
  );
}

export default SignUp;
