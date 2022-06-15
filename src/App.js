import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Browse from "./components/browse/Browse";
import AddCard from "./components/card/AddCard";
import EditCard from "./components/card/EditCard";
import CreateDeck from "./components/deck/CreateDeck";
import Deck from "./components/deck/Deck";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import NotFound from "./components/layout/NotFound";
import Study from "./components/study/Study";

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-2">
          <Menu />
        </div>
        <div className="col-10">
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Navigate to="/browse" replace />}
            />
            <Route path="/decks/:deckId/study" element={<Study />} />
            <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
            <Route
              path="/decks/:deckId/cards/:cardId/edit"
              element={<EditCard />}
            />
            <Route path="/decks/new" element={<CreateDeck />} />
            <Route path="/browse/deck/:deckId" element={<Deck />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
