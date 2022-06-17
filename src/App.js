import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Browse from "./components/menu/Browse";
import AddCard from "./components/card/AddCard";
import EditCard from "./components/card/EditCard";
import CreateDeck from "./components/deck/CreateDeck";
import Deck from "./components/deck/Deck";
import EditDeck from "./components/deck/EditDeck";
import Header from "./components/layout/Header";
import Menu from "./components/layout/Menu";
import NotFound from "./components/layout/NotFound";
import Study from "./components/study/Study";
import SignUp from "./components/menu/SignUp";
import SignIn from "./components/menu/SignIn";

function App() {
  const [user, setUser] = useState({});

  // const [user, setUser] = useState({userId: 1, username: "user1"});

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
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/decks/:deckId/study" element={<Study />} />
            <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
            <Route
              path="/decks/:deckId/cards/:cardId/edit"
              element={<EditCard />}
            />
            <Route path="/decks/new" element={<CreateDeck />} />
            <Route path="/decks/:deckId/edit" element={<EditDeck />} />
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
