import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useEffect } from "react/cjs/react.development";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { Switch, Route } from "react-router-dom";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentUser, setCurrentUser] = useState({
    about: "",
    avatar: "",
    cohort: "",
    name: "",
    _id: "",
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    setisImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisImagePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(userDataFromForm) {
    setIsLoading(true);
    api
      .editUserInfo(userDataFromForm)
      .then((userDataUpdated) => {
        setCurrentUser({
          ...userDataUpdated,
          name: userDataUpdated.name,
          about: userDataUpdated.about,
        });
        closeAllPopups();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUpdateAvatar(avatarLink) {
    setIsLoading(true);
    api
      .updateProfileAvatar(avatarLink.value)
      .then((userDataUpdated) => {
        setCurrentUser({
          ...userDataUpdated,
          avatar: userDataUpdated.avatar,
        });
        closeAllPopups();
        avatarLink.value = "";
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => {
          state.map((c) => (c._id === card._id ? newCard : c));
        });
      })
      .catch((error) => console.log(error));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((error) => console.log(error));
  }

  function handleAddPlaceSubmit(newCardData, clearInputs) {
    setIsLoading(true);
    api
      .addNewCard(newCardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
        clearInputs();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
              isLoading={isLoading}
            />
            <PopupWithForm
              name="confirm"
              title="Вы уверены?"
              textSubmitBtn="Да"
            />
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
              isLoading={isLoading}
            />
            <ImagePopup
              isOpen={isImagePopupOpen}
              onClose={closeAllPopups}
              selectedCard={selectedCard}
            />
          </Route>
          <Route path="/sign-up">
            <h1 style={{ color: "white" }}>Регистрация</h1>
          </Route>
          <Route path="/sign-in">
            <h1 style={{ color: "white" }}>Авторизация</h1>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
