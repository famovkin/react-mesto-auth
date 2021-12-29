export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((response) => {
      try {
        if (response.status === 201) {
          return response.json();
        }
      } catch (err) {
        return err;
      }
    })
    .then((response) => {
      return response;
    })
    .catch((e) => console.log(e));
};
