import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import CofirmPopup from "./ConfirmPopup";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from "./auth";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [deletedCard, setDeletedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({
    about: "",
    avatar: "",
    cohort: "",
    name: "",
    _id: "",
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      auth.getContent(token).then((response) => {
        if (response) {
          setloggedIn(true);
          setEmail(response.data.email);
          history.push("/");
        }
      });
    }
  }, [history, loggedIn]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(cardData) {
    setIsImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setDeletedCard({});
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
      .finally(() => setIsLoading(false));
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
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => console.log(error));
  }

  function onBinClick(card) {
    setDeletedCard(card);
    setIsConfirmPopupOpen(true);
  }

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(deletedCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== deletedCard._id));
        closeAllPopups();
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
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
      .finally(() => setIsLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
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
        <CofirmPopup
          isOpen={isConfirmPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
          isLoading={isLoading}
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
        {loggedIn && (
          <Header
            email={email}
            linkText="Выйти"
            loggedIn={loggedIn}
            setLoggedIn={setloggedIn}
          />
        )}
        <Switch>
          <ProtectedRoute
            path="/"
            exact
            component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onBinClick={onBinClick}
            loggedIn={loggedIn}
          />
          <Route path="/sign-up">
            <Header linkText="Войти" path="/sign-in" />
            <Register />
          </Route>
          <Route path="/sign-in">
            <Header linkText="Регистрация" path="/sign-up" />
            <Login handleLogin={() => setloggedIn(true)} />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
        {loggedIn && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
