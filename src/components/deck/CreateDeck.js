import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function CreateDeck({ user }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

  const initialFormState = {
    userId: user.userId,
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await createDeck(formData);

    if (response.status === 201) {
      let newDeck = await response.json();
      setFormData({ ...initialFormState });
      navigate(`/dashboard/deck/${newDeck.deckId}`);
    } else {
      let err = Object.values(await response.json());

      setErrors(err);
    }
  };

  return (
    <>
      <h2>Create Deck</h2>
      <ErrorAlert errors={errors} />
      <DeckForm formData={formData} handleChange={handleChange} />
      <Link to="/dashboard">
        <button className="btn btn-secondary mr-2">Cancel</button>
      </Link>
      <button
        form="deckForm"
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}

export default CreateDeck;
