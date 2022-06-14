import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Study() {
  let navigate = useNavigate();

  const [deck, setDeck] = useState([]);

  const deckId = useParams().deckId;

  const [cardId, setCardId] = useState(1);

  let getDeck = async () => {
    let response = await fetch(`http://localhost:8080/decks/${deckId}`);
    let result = await response.json();

    setDeck(result);
  };

  useEffect(() => {
    getDeck();
  }, [deckId]);

  const [cards, setCards] = useState([]);

  let getCards = async () => {
    let response = await fetch(`http://localhost:8080/cards/${deckId}`);
    let result = await response.json();

    setCards(result);
  };

  useEffect(() => {
    getCards();
  }, []);
  console.log(cards);

  const [flip, setFlip] = useState(true);

  return (
    <>
      <h1>Study: {deck.name}</h1>

      {cards.length > 0 ? (
        <div className="card col-8">
          <div className="card-body">
            <h5 className="card-title">
              Card {cardId} of {cards.length}
            </h5>
            <p className="card-text">
              {flip ? cards[cardId - 1].front : cards[cardId - 1].back}
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => setFlip(!flip)}
            >
              Flip
            </button>
            {!flip ? (
              <button
                className="btn btn-primary ml-1"
                onClick={() => {
                  if (cardId === cards.length) {
                    if (window.confirm("Restart cards?")) {
                      setCardId(1);
                      setFlip(!flip);
                    } else {
                      navigate("/");
                    }
                  } else {
                    setCardId(cardId + 1);
                    setFlip(!flip);
                  }
                }}
              >
                Next
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Study;
