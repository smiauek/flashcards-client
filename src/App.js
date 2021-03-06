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
import SignIn from "./components/menu/SignIn";
import SearchDecks from "./components/menu/SearchDecks";
import Account from "./components/menu/Account";
import Dashboard from "./components/menu/Dashboard";
import Register from "./components/menu/Register";

function App() {
  let userDetails = {};
  userDetails.userId = localStorage.getItem("userId");
  userDetails.username = localStorage.getItem("username");
  userDetails.email = localStorage.getItem("email");

  const [user, setUser] = useState(userDetails.userId ? userDetails : {});

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-2">
          <Menu user={user} />
        </div>
        <div className="col-10">
          <Routes>
            <Route
              exact={true}
              path="/"
              element={<Navigate to="/browse" replace />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
            <Route path="/search" element={<SearchDecks />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route
              path="/account"
              element={<Account user={user} setUser={setUser} />}
            />
            <Route path="/decks/:deckId/study" element={<Study />} />
            <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
            <Route
              path="/decks/:deckId/cards/:cardId/edit"
              element={<EditCard />}
            />
            <Route path="/decks/new" element={<CreateDeck user={user} />} />
            <Route path="/decks/:deckId/edit" element={<EditDeck />} />
            <Route path="/browse/deck/:deckId" element={<Deck />} />
            <Route path="/dashboard/deck/:deckId" element={<Deck />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
