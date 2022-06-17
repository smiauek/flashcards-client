import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDeck, getCards } from "../../utils/api";

function Study() {
  let navigate = useNavigate();

  const [deck, setDeck] = useState([]);

  const deckId = useParams().deckId;

  const [cardNo, setCardNo] = useState(1);

  useEffect(() => {
    getDeck(deckId).then(setDeck);
  }, [deckId]);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards(deckId).then(setCards);
  }, [deckId]);

  const [flip, setFlip] = useState(true);

  return (
    <>
      <h1>Study: {deck.name}</h1>

      {cards.length > 0 ? (
        <div className="card col-8">
          <div className="card-body">
            <h5 className="card-title">
              Card {cardNo} of {cards.length}
            </h5>
            <p className="card-text">
              {flip ? cards[cardNo - 1].front : cards[cardNo - 1].back}
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
                  if (cardNo === cards.length) {
                    if (window.confirm("Restart cards?")) {
                      setCardNo(1);
                      setFlip(!flip);
                    } else {
                      navigate(-1);
                    }
                  } else {
                    setCardNo(cardNo + 1);
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
