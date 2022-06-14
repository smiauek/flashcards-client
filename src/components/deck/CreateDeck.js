import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeckForm from "./DeckForm";

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
    const response = await fetch("http://localhost:8080/decks/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setFormData({ ...initialFormState });
    navigate(`/browse/deck/${data.deckId}`);
  };

  return (
    <>
      <h2>Create Deck</h2>
      <DeckForm formData={formData} handleChange={handleChange} />
      <Link to="/">
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
