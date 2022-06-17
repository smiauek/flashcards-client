import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
  const deckId = useParams().deckId;

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    getDeck(deckId).then(setDeck);
  }, [deckId]);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    navigate(`/dashboard/deck/${deckId}`);
  };

  return (
    <>
      <h2>Edit Deck</h2>
      <DeckForm formData={deck} handleChange={handleChange} />
      <Link to={`/dashboard/deck/${deckId}`}>
        <button className="btn btn-secondary mr-2">Cancel</button>
      </Link>
      <button
        form="deckForm"
        type="submit"
        className="btn btn-primary"
        onClick={handleSave}
      >
        Save
      </button>
    </>
  );
}

export default EditDeck;
