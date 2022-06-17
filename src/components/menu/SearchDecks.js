import React, { useState } from "react";
import { findDecks } from "../../utils/api";
import DeckList from "../deck/DeckList";
import SearchDecksForm from "../deck/SearchDecksForm";

function SearchDecks() {
  const initialFormState = {
    searchTerm: "",
  };

  const [foundDecks, setFoundDecks] = useState([]);
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(formData);
  };

  const handleFind = async (event) => {
    event.preventDefault();

    findDecks(formData.searchTerm).then(setFoundDecks);
    setFormData({ ...initialFormState });
  };

  return (
    <>
      <h1>Search Decks:</h1>
      <SearchDecksForm formData={formData} handleChange={handleChange} />
      <button
        form="searchDeckForm"
        type="submit"
        className="btn btn-primary mt-2 mb-4"
        onClick={handleFind}
      >
        Find
      </button>

      {foundDecks.length > 0 && <h3>Search Results:</h3>}

      {foundDecks.length > 0 &&
        foundDecks.map((deck) => <DeckList key={deck.deckId} deck={deck} />)}
    </>
  );
}

export default SearchDecks;
