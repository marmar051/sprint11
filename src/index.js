import "./style.css";

import {Api} from "./js/Api.js";
import {Card} from "./js/Card.js";
import {CardList} from "./js/CardList.js";
import {Popup} from "./js/Popup.js";
import {UserInfo} from "./js/UserInfo.js";
import {FormValidator} from "./js/FormValidator.js";

const popupButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__editbutton');
const popupEdit = document.querySelector('.popup_edit');
const popupCloseEditx = document.querySelector('.popup__close-edit');
const formEdit = document.forms.edit;
const form = document.forms.new;
const popup = document.querySelector('.popup');
const popupClosex = document.querySelector('.popup__close');
const placesList = document.querySelector('.places-list');
const buttonLikeCard = placesList.querySelector('.place-card__like-icon');
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort10' : 'https://praktikum.tk/cohort10';
    
export const api = new Api(formEdit, serverUrl);
const card = new Card(placesList)
const cardList = new CardList(placesList, form, popup, api, card);
const userInfo = new UserInfo(formEdit, popupEdit, api)
const popupС = new Popup(popup, popupEdit, formEdit, userInfo, form, popupButton, editButton, popupCloseEditx, placesList)
const formValidator = new FormValidator(formEdit, form)


userInfo.setUserInfo();
cardList.render(card);
 

      


console.log(api)
