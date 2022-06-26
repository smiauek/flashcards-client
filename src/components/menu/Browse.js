import React, { useState, useEffect } from "react";
import DeckList from "../deck/DeckList";
import { getAllDecks } from "../../utils/api";

function Browse() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getAllDecks().then(setDecks);
  }, []);

  return (
    <>
      <h1>Browse Decks:</h1>
      <br />
      <div>
        {decks.length > 0
          ? decks.map((deck) => <DeckList key={deck.deckId} deck={deck} />)
          : "Loading decks..."}
      </div>
      <br />
      <br />
    </>
  );
}

export default Browse;
