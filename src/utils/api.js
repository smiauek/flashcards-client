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

export async function updateCard(updatedCard) {
  await fetch(API_BASE_URL + `/cards/update/${updatedCard.cardId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCard),
  });
}

export async function deleteCard(cardId) {
  await fetch(API_BASE_URL + `/cards/${cardId}`, { method: "DELETE" });
}

export async function deleteDeck(deckId) {
  await fetch(API_BASE_URL + `/decks/${deckId}`, { method: "DELETE" });
}
