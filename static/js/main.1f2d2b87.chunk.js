(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(15),s=n.n(c),o=n(6),i=(n(26),n(20)),r=n(7),u=n(2),l=n.p+"static/media/logo.bbe2a6ea.svg",p=n(3),d=n.p+"static/media/burger.a46d5c1c.svg",j=n.p+"static/media/close_icon.039f1f52.svg",b=n(0);var h=function(e){var t=e.email,n=e.linkText,c=e.path,s=e.loggedIn,i=e.setLoggedIn,r=Object(a.useState)(!1),h=Object(u.a)(r,2),f=h[0],m=h[1],O=Object(p.g)(),g=function(){localStorage.removeItem("token"),i(!1),O.push("/sign-in")};return Object(b.jsxs)(b.Fragment,{children:[f&&Object(b.jsxs)("div",{className:"header__profile header__profile_type_burger",children:[Object(b.jsx)("p",{className:"header__email header__email_type_burger",children:t}),Object(b.jsx)("button",{className:"header__link header__link_type_burger",onClick:g,children:n})]}),Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("img",{className:"logo header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})}),s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header__profile ".concat(s&&"header__profile_type_logged"," "),children:[Object(b.jsx)("p",{className:"header__email",children:t}),Object(b.jsx)("button",{className:"header__link",onClick:g,children:n})]}),Object(b.jsx)("img",{className:"header__burger-button",onClick:function(){return m((function(e){return!e}))},src:f?j:d,alt:"\u0411\u0443\u0440\u0433\u0435\u0440 \u043c\u0435\u043d\u044e"})]}):Object(b.jsx)("div",{className:"header__profile",children:Object(b.jsx)(o.b,{className:"header__link",to:c,children:n})})]})]})},f=n.p+"static/media/edit_button.6c7bf054.svg",m=n.p+"static/media/add_button.bed8c136.svg",O=Object(a.createContext)();var g=function(e){var t=Object(a.useContext)(O),n=e.card.owner._id===t._id,c="card__delete-button ".concat(!n&&"card__delete-button_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="card__like-button ".concat(s&&"card__like-button_type_liked");return Object(b.jsxs)("li",{className:"card",children:[Object(b.jsx)("button",{onClick:function(){e.onBinClick(e.card)},className:c,type:"button"}),Object(b.jsx)("img",{className:"card__image",onClick:function(){e.onCardClick(e.card)},src:e.card.link,alt:e.card.name}),Object(b.jsxs)("div",{className:"card__content",children:[Object(b.jsx)("h2",{className:"card__title",children:e.card.name}),Object(b.jsxs)("div",{className:"card__like",children:[Object(b.jsx)("button",{onClick:function(){e.onCardLike(e.card)},className:o,type:"button"}),Object(b.jsx)("p",{className:"card__like-counter",children:e.card.likes.length})]})]})]})};var _=function(e){var t=Object(a.useContext)(O);return Object(b.jsxs)("main",{children:[Object(b.jsxs)("section",{className:"profile page__profile",children:[Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsx)("button",{className:"profile__avatar-edit-button",onClick:e.onEditAvatar,type:"button",children:Object(b.jsx)("img",{className:"profile__avatar-image",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(b.jsxs)("div",{className:"profile__text",children:[Object(b.jsx)("h1",{className:"profile__name",children:t.name}),Object(b.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button",children:Object(b.jsx)("img",{className:"profile__edit-image",src:f,alt:"\u041a\u0430\u0440\u0430\u043d\u0434\u0430\u0448"})}),Object(b.jsx)("p",{className:"profile__job",children:t.about})]})]}),Object(b.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,type:"button",children:Object(b.jsx)("img",{className:"profile__add-image",src:m,alt:"\u041f\u043b\u044e\u0441"})})]}),Object(b.jsx)("section",{className:"places page__places","aria-label":"\u0411\u043b\u043e\u043a \u0441 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u043c\u0438",children:Object(b.jsx)("ul",{className:"places__cards",children:e.cards.map((function(t){return Object(b.jsx)(g,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onBinClick:e.onBinClick},t._id)}))})})]})};var x=function(){return Object(b.jsx)("footer",{className:"footer page__footer",children:Object(b.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var v=function(e){return Object(b.jsx)("div",{className:"popup popup_type_image ".concat(e.isOpen&&"popup_opened"),onClick:e.onClose,children:Object(b.jsxs)("div",{className:"popup__image-container",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("button",{className:"popup__close-button",type:"button",children:Object(b.jsx)("img",{className:"popup__close-image",onClick:e.onClose,src:j,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a"})}),Object(b.jsx)("img",{className:"popup__image",src:e.selectedCard.link,alt:e.selectedCard.name}),Object(b.jsx)("h2",{className:"popup__heading",children:e.selectedCard.name})]})})},k=n(18),A=n(19),C=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(k.a)(this,e),this._baseUrl=n,this._headers=a}return Object(A.a)(e,[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0443")}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this,n=e.name,a=e.job;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._checkServerResponse(t)})).then((function(e){return e}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkServerResponse(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return n._checkServerResponse(e)})):fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return n._checkServerResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"updateProfileAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkServerResponse(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-30/",headers:{authorization:"f8d069a4-3828-4aef-8f1b-77976b73046b","Content-Type":"application/json"}});var N=function(e){return Object(b.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),onClick:e.onClose,children:Object(b.jsxs)("div",{className:"popup__container",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("button",{className:"popup__close-button",type:"button",children:Object(b.jsx)("img",{className:"popup__close-image",onClick:e.onClose,src:j,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a"})}),Object(b.jsxs)("form",{onSubmit:function(t){e.onSubmit(t)},className:"popup__form popup__form_type_".concat(e.name),name:e.name,children:[Object(b.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(b.jsx)("button",{className:"popup__button",type:"submit",children:e.isLoading?e.textLoader:e.textSubmitBtn})]})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=e.isLoading,o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(a.useState)(""),d=Object(u.a)(p,2),j=d[0],h=d[1],f=Object(a.useContext)(O);return Object(a.useEffect)((function(){l(f.name),h(f.about)}),[f,t]),Object(b.jsxs)(N,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textSubmitBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",textLoader:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isLoading:s,isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,job:j})},children:[Object(b.jsx)("input",{value:r||"",onChange:function(e){l(e.target.value)},id:"name-input",className:"popup__input popup__input_type_name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(b.jsx)("span",{className:"popup__error name-input-error"}),Object(b.jsx)("input",{value:j||"",onChange:function(e){h(e.target.value)},id:"job-input",className:"popup__input popup__input_type_job",type:"text",name:"job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",minLength:"2",maxLength:"200",required:!0}),Object(b.jsx)("span",{className:"popup__error job-input-error"})]})};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.isLoading,o=Object(a.useRef)();return Object(b.jsxs)(N,{onSubmit:function(e){e.preventDefault(),c(o.current)},name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textSubmitBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",textLoader:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isLoading:s,isOpen:t,onClose:n,children:[Object(b.jsx)("input",{ref:o,id:"avatar-link-input",className:"popup__input popup__input_type_avatar-link",type:"url",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(b.jsx)("span",{className:"popup__error avatar-link-input-error"})]})};var L=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.isLoading,o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(a.useState)(""),d=Object(u.a)(p,2),j=d[0],h=d[1];function f(){l(""),h("")}return Object(b.jsxs)(N,{onSubmit:function(e){e.preventDefault(),c({name:r,link:j},f)},name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textSubmitBtn:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",textLoader:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isLoading:s,isOpen:t,onClose:n,children:[Object(b.jsx)("input",{value:r,onChange:function(e){l(e.target.value)},id:"place-name-input",className:"popup__input popup__input_type_place-name",type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(b.jsx)("span",{className:"popup__error place-name-input-error"}),Object(b.jsx)("input",{value:j,onChange:function(e){h(e.target.value)},id:"place-link-input",className:"popup__input popup__input_type_place-link",type:"url",name:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(b.jsx)("span",{className:"popup__error place-link-input-error"})]})};var B=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit,c=e.isLoading;return Object(b.jsx)(N,{onSubmit:function(e){e.preventDefault(),a()},isOpen:t,onClose:n,isLoading:c,name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textSubmitBtn:"\u0414\u0430",textLoader:"\u0423\u0434\u0430\u043b\u044f\u0435\u043c..."})};var X=function(e){var t=e.isOpen,n=e.onClose,a=e.isSuccess;return Object(b.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),onClick:n,children:Object(b.jsxs)("div",{className:"popup__container popup__container_type_info",onClick:function(e){return e.stopPropagation()},children:[Object(b.jsx)("button",{className:"popup__close-button",type:"button",children:Object(b.jsx)("img",{className:"popup__close-image",onClick:n,src:j,alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a"})}),Object(b.jsx)("img",{className:"popup__info-image",src:a?"data:image/png;base64,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":"data:image/png;base64,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",alt:"\u0413\u0430\u043b\u043e\u0447\u043a\u0430"}),Object(b.jsx)("h2",{className:"popup__title popup__title_type_info",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"})]})})},w="https://auth.nomoreparties.co";var E=function(e){var t=e.setInfoMsg,n=e.setRegistationStatus,c=Object(a.useState)(""),s=Object(u.a)(c,2),i=s[0],r=s[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),j=d[0],h=d[1],f=Object(a.useState)(!1),m=Object(u.a)(f,2),O=m[0],g=m[1],_=Object(a.useState)(!1),x=Object(u.a)(_,2),v=x[0],k=x[1],A=Object(p.g)();return Object(a.useEffect)((function(){return function(){return k(!0)}}),[]),Object(b.jsx)("div",{className:"form-section",children:Object(b.jsx)("div",{className:"form-section__container",children:Object(b.jsxs)("form",{onSubmit:function(e){v||(g(!0),e.preventDefault(),function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){try{if(201===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}(j,i).then((function(e){e?(A.push("/sign-in"),n(!0)):(console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"),n(!1))})).catch((function(e){return console.log(e)})).finally((function(){t(!0),g(!1)})))},className:"form-section__form",name:"sign-up",children:[Object(b.jsx)("h2",{className:"form-section__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)("input",{value:i,onChange:function(e){return r(e.target.value)},className:"form-section__input",type:"email",name:"email",placeholder:"Email",required:!0}),Object(b.jsx)("input",{value:j,onChange:function(e){return h(e.target.value)},className:"form-section__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(b.jsx)("button",{className:"form-section__button",type:"submit",children:O?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsxs)("p",{className:"form-section__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(b.jsx)(o.b,{className:"form-section__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})};var I=function(e){var t=e.handleLogin,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],d=r[1],j=Object(p.g)();return Object(b.jsx)("div",{className:"form-section",children:Object(b.jsx)("div",{className:"form-section__container",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&l&&function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e})).catch((function(e){return console.log(e)}))}(l,s).then((function(e){e.token&&(o(""),d(""),t(),j.push("/"))})).catch((function(e){return console.log(e)}))},className:"form-section__form",name:"sign-up",children:[Object(b.jsx)("h2",{className:"form-section__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)("input",{value:s,onChange:function(e){return o(e.target.value)},className:"form-section__input",type:"email",name:"email",placeholder:"Email",required:!0}),Object(b.jsx)("input",{value:l,onChange:function(e){return d(e.target.value)},className:"form-section__input",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(b.jsx)("button",{className:"form-section__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})},U=n(21),R=["component"];var W=function(e){var t=e.component,n=Object(U.a)(e,R);return Object(b.jsx)(p.b,{children:n.loggedIn?Object(b.jsx)(t,Object(r.a)({},n)):Object(b.jsx)(p.a,{to:"./sign-in"})})};var P=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(a.useState)(!1),f=Object(u.a)(j,2),m=f[0],g=f[1],k=Object(a.useState)(!1),A=Object(u.a)(k,2),N=A[0],U=A[1],R=Object(a.useState)(!1),P=Object(u.a)(R,2),T=P[0],H=P[1],Q=Object(a.useState)(!1),J=Object(u.a)(Q,2),V=J[0],F=J[1],M=Object(a.useState)(!1),Y=Object(u.a)(M,2),K=Y[0],z=Y[1],G=Object(a.useState)({name:"",link:""}),Z=Object(u.a)(G,2),D=Z[0],q=Z[1],$=Object(a.useState)({}),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({about:"",avatar:"",cohort:"",name:"",_id:""}),ce=Object(u.a)(ae,2),se=ce[0],oe=ce[1],ie=Object(a.useState)([]),re=Object(u.a)(ie,2),ue=re[0],le=re[1],pe=Object(a.useState)(!1),de=Object(u.a)(pe,2),je=de[0],be=de[1],he=Object(a.useState)(!1),fe=Object(u.a)(he,2),me=fe[0],Oe=fe[1],ge=Object(a.useState)(""),_e=Object(u.a)(ge,2),xe=_e[0],ve=_e[1],ke=Object(p.g)();function Ae(){g(!1),c(!1),d(!1),U(!1),H(!1),F(!1),q({name:"",link:""}),ne({})}return Object(a.useEffect)((function(){Promise.all([C.getUserInfo(),C.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];oe(n),le(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){localStorage.getItem("token")&&function(e){return fetch("".concat(w,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(localStorage.getItem("token")).then((function(e){e&&(Oe(!0),ve(e.data.email),ke.push("/"))}))}),[ke,me]),Object(b.jsx)(O.Provider,{value:se,children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(y,{isOpen:n,onClose:Ae,onUpdateUser:function(e){be(!0),C.editUserInfo(e).then((function(e){oe(Object(r.a)(Object(r.a)({},e),{},{name:e.name,about:e.about})),Ae()})).catch((function(e){return console.log(e)})).finally((function(){return be(!1)}))},isLoading:je}),Object(b.jsx)(L,{isOpen:l,onClose:Ae,onAddPlace:function(e,t){be(!0),C.addNewCard(e).then((function(e){le([e].concat(Object(i.a)(ue))),Ae(),t()})).catch((function(e){return console.log(e)})).finally((function(){return be(!1)}))},isLoading:je}),Object(b.jsx)(B,{isOpen:T,onClose:Ae,onSubmit:function(){be(!0),C.deleteCard(te._id).then((function(){le((function(e){return e.filter((function(e){return e._id!==te._id}))})),Ae()})).catch((function(e){return console.log(e)})).finally((function(){return be(!1)}))},isLoading:je}),Object(b.jsx)(S,{isOpen:m,onClose:Ae,onUpdateAvatar:function(e){be(!0),C.updateProfileAvatar(e.value).then((function(t){oe(Object(r.a)(Object(r.a)({},t),{},{avatar:t.avatar})),Ae(),e.value=""})).catch((function(e){return console.log(e)})).finally((function(){return be(!1)}))},isLoading:je}),Object(b.jsx)(v,{isOpen:N,onClose:Ae,selectedCard:D}),Object(b.jsx)(X,{isOpen:V,onClose:Ae,isSuccess:K}),me&&Object(b.jsx)(h,{email:xe,linkText:"\u0412\u044b\u0439\u0442\u0438",loggedIn:me,setLoggedIn:Oe}),Object(b.jsxs)(p.d,{children:[Object(b.jsx)(W,{path:"/",exact:!0,component:_,onEditProfile:function(){c(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){g(!0)},onCardClick:function(e){U(!0),q(e)},cards:ue,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===se._id}));C.changeLikeCardStatus(e._id,!t).then((function(t){le((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onBinClick:function(e){ne(e),H(!0)},loggedIn:me}),Object(b.jsxs)(p.b,{path:"/sign-up",children:[Object(b.jsx)(h,{linkText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-in"}),Object(b.jsx)(E,{setInfoMsg:F,setRegistationStatus:z})]}),Object(b.jsxs)(p.b,{path:"/sign-in",children:[Object(b.jsx)(h,{linkText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/sign-up"}),Object(b.jsx)(I,{handleLogin:function(){return Oe(!0)}})]}),Object(b.jsx)(p.a,{to:"/sign-in"})]}),me&&Object(b.jsx)(x,{})]})})};s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1f2d2b87.chunk.js.map