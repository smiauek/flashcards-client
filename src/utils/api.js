const API_BASE_URL = "http://localhost:8080";
// const API_BASE_URL = "https://gentle-shelf-18588.herokuapp.com";

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
  let response = await fetch(API_BASE_URL + `/decks/user/${userId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
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
  let response = await fetch(API_BASE_URL + `/cards/one/${cardId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  let result = await response.json();
  return result;
}

export async function createDeck(newDeck) {
  const response = await fetch(API_BASE_URL + "/decks/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(newDeck),
  });

  return response;
}

export async function createCard(newCard) {
  const response = await fetch(API_BASE_URL + "/cards/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(newCard),
  });

  return response;
}

export async function updateCard(updatedCard) {
  const response = await fetch(
    API_BASE_URL + `/cards/update/${updatedCard.cardId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(updatedCard),
    }
  );

  return response;
}

export async function updateDeck(updatedDeck) {
  const response = await fetch(
    API_BASE_URL + `/decks/update/${updatedDeck.deckId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(updatedDeck),
    }
  );

  return response;
}

export async function deleteCard(cardId) {
  await fetch(API_BASE_URL + `/cards/delete/${cardId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export async function deleteDeck(deckId) {
  await fetch(API_BASE_URL + `/decks/delete/${deckId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export async function createUser(newUser) {
  const response = await fetch(API_BASE_URL + "/users/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  return response;
}

export async function signIn(creds) {
  const response = await fetch(API_BASE_URL + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });
  const data = await response.text();

  return data;
}

export async function getUserDetails(username) {
  let response = await fetch(API_BASE_URL + `/users/one?username=${username}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  let result = await response.json();
  return result;
}
