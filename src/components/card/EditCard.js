import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDeck, getOneCard, updateCard } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import CardForm from "./CardForm";

function EditCard() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});
  const [errors, setErrors] = useState(null);

  const { deckId, cardId } = useParams();

  useEffect(() => {
    getDeck(deckId).then(setDeck);
  }, [deckId]);

  useEffect(() => {
    getOneCard(cardId).then(setCard);
  }, [cardId]);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    let response = await updateCard(card);

    if (response.status === 200) {
      navigate(`/dashboard/deck/${deckId}`);
    } else {
      let err = Object.values(await response.json());

      setErrors(err);
    }
  };

  return (
    <>
      <h2>Edit Card</h2>
      <ErrorAlert errors={errors} />
      <CardForm formData={card} handleChange={handleChange} />
      <Link to={`/dashboard/deck/${deckId}`}>
        <button className="btn btn-secondary mr-2">Cancel</button>
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

export default EditCard;
