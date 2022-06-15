import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getDeck, getOneCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});

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
    await updateCard(card);
    navigate(`/browse/deck/${deckId}`);
  };

  return (
    <>
      <h2>Edit Card</h2>
      <CardForm formData={card} handleChange={handleChange} />
      <Link to={`/browse/deck/${deckId}`}>
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
