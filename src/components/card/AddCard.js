import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CardForm from "./CardForm";
import { getDeck, createCard } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function AddCard() {
  const [errors, setErrors] = useState(null);
  const [deck, setDeck] = useState([]);

  const deckId = useParams().deckId;

  useEffect(() => {
    getDeck(deckId).then(setDeck);
  }, [deckId]);

  const navigate = useNavigate();

  const initialFormState = {
    front: "",
    back: "",
    deckId: Number(deckId),
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

    let response = await createCard(formData);

    if (response.status === 201) {
      setFormData({ ...initialFormState });
      setErrors(null);
      navigate(`/decks/${deckId}/cards/new`);
    } else {
      let err = Object.values(await response.json());

      setErrors(err);
    }
  };

  return (
    <>
      <h2>{deck.name}: Add Card</h2>
      <ErrorAlert errors={errors} />
      <CardForm formData={formData} handleChange={handleChange} />
      <Link to={`/dashboard/deck/${deckId}`}>
        <button className="btn btn-secondary mr-2">Done</button>
      </Link>
      <button
        form="cardForm"
        type="submit"
        className="btn btn-primary"
        onClick={handleSave}
      >
        Save
      </button>
    </>
  );
}

export default AddCard;
