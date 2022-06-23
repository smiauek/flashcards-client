import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../user/UserForm";
import { createUser } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Register() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

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

    let response = await createUser(formData);

    if (response.status === 201) {
      setFormData({ ...initialFormState });
      navigate(`/sign-in`);
    } else {
      let err = Object.values(await response.json());

      setErrors(err);
    }
  };

  return (
    <>
      <h1>Create Account:</h1>
      <ErrorAlert errors={errors} />
      <UserForm formData={formData} handleChange={handleChange} />
      <button
        form="userForm"
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

export default Register;
