import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDeck, updateDeck } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import DeckForm from "./DeckForm";

function EditDeck() {
  const deckId = useParams().deckId;

  const [errors, setErrors] = useState(null);

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

    let response = await updateDeck(deck);

    if (response.status === 200) {
      navigate(`/dashboard/deck/${deckId}`);
    } else {
      let err = Object.values(await response.json());

      setErrors(err);
    }
  };

  return (
    <>
      <h2>Edit Deck</h2>
      <ErrorAlert errors={errors} />
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
