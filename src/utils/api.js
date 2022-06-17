const API_BASE_URL = "http://localhost:8080";

export async function getDeck(deckId) {
  let response = await fetch(API_BASE_URL + `/decks/${deckId}`);
  let result = await response.json();
  return result;
}

export async function getAllDecks() {
  let response = await fetch(API_BASE_URL + `/decks/`);
  let result = await response.json();
  return result;
}

export async function getUserDecks(userId) {
  let response = await fetch(API_BASE_URL + `/decks/user/${userId}`);
  let result = await response.json();
  return result;
}

export async function findDecks(searchTerm) {
  let response = await fetch(
    API_BASE_URL + `/decks/find?searchTerm=${searchTerm}`
  );
  let result = await response.json();
  return result;
}

export async function getCards(deckId) {
  let response = await fetch(API_BASE_URL + `/cards/${deckId}`);
  let result = await response.json();
  return result;
}

export async function getOneCard(cardId) {
  let response = await fetch(API_BASE_URL + `/cards/one/${cardId}`);
  let result = await response.json();
  return result;
}

export async function createDeck(newDeck) {
  const response = await fetch(API_BASE_URL + "/decks/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDeck),
  });
  const data = await response.json();

  return data;
}

export async function createCard(newCard) {
  await fetch(API_BASE_URL + "/cards/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCard),
  });
}

export async function updateCard(updatedCard) {
  await fetch(API_BASE_URL + `/cards/update/${updatedCard.cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCard),
  });
}

export async function updateDeck(updatedDeck) {
  await fetch(API_BASE_URL + `/decks/update/${updatedDeck.deckId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedDeck),
  });
}

export async function deleteCard(cardId) {
  await fetch(API_BASE_URL + `/cards/${cardId}`, { method: "DELETE" });
}

export async function deleteDeck(deckId) {
  await fetch(API_BASE_URL + `/decks/${deckId}`, { method: "DELETE" });
}

export async function createUser(newUser) {
  await fetch(API_BASE_URL + "/users/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
}
