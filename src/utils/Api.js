class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then((res) => this._checkServerResponse(res));
  }

  editUserInfo({ name, job }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    })
      .then((res) => this._checkServerResponse(res))
      .then((res) => {
        return res;
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkServerResponse(res));
  }

  changeLikeCardStatus(cardId, likeStatus) {
    if (likeStatus) {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => this._checkServerResponse(res));
    } else {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then((res) => this._checkServerResponse(res));
    }
  }

  addNewCard(newCard) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  updateProfileAvatar(newAvatarLink) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: newAvatarLink,
      }),
    }).then((res) => this._checkServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-30/",
  headers: {
    authorization: "f8d069a4-3828-4aef-8f1b-77976b73046b",
    "Content-Type": "application/json",
  },
});
