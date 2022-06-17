import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../../utils/api";

function CreateDeck() {
  const navigate = useNavigate();

  const initialFormState = {
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

    let newDeck = await createDeck(formData);

    setFormData({ ...initialFormState });
    navigate(`/dashboard/deck/${newDeck.deckId}`);
  };

  return (
    <>
      <h2>Create Deck</h2>
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
