<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background-color: #131516;
  position: relative;
  height: 100vh;
}

.container {
  position: absolute;
  top: 10%;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  color: #fff;
  width: 50%;
}

.container__date {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.container__date svg {
  margin-top: 15px;
  margin-left: 20px;
  opacity: 0.1;
  fill: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.container__date svg:hover {
  opacity: 1;
}

.container__date p {
  font-size: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 20px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.container__date p span {
  line-height: normal;
  font-size: 4.5rem;
  margin-right: 5px;
  font-weight: bold;
}

.container__progress {
  margin-top: 2rem;
  height: 2rem;
  border-radius: 5px;
  width: 100%;
  background-color: #0d0e0f;
  position: relative;
}

.container__progress div {
  display: inline-block;
  height: 100%;
}

.container__progress--done {
  background-color: #2fde49;
  z-index: 2;
}

.container__progress--pending {
  width: 50%;
  z-index: 1;
  background-color: #fed62c;
}

.container__addTodo {
  margin-top: 20px;
  height: 6rem;
  background-color: #0d0e0f;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 5px;
}

.container__addTodo input {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  padding-left: 20px;
  font-size: 1.8rem;
  outline: none;
  caret-color: #fff;
  color: #fff;
}

.container__addTodo svg {
  fill: #fff;
  margin-right: 10px;
  cursor: pointer;
  opacity: 0.5;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.container__addTodo svg:hover {
  opacity: 1;
}

.container__todoItem {
  margin-top: 20px;
  height: 6rem;
  background-color: #1f2124;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 5px;
}

.container__todoItem h2 {
  padding-left: 20px;
  font-size: 1.8rem;
  caret-color: #fff;
  color: #fff;
  letter-spacing: 0.5px;
  font-weight: 400;
}

.container__todoItem--actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 20px;
}

.container__todoItem--actions svg {
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  opacity: 0.5;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  margin-left: 1.8rem;
  opacity: 1;
}

.container__todoItem--actions svg:first-child {
  margin-left: 0;
}

.close {
  fill: #ff1a55;
}

.pause {
  fill: #ffc935;
}

.done {
  fill: #2fde49;
}

.container__subHeading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.8rem;
  margin-top: 20px;
  opacity: 0.6;
  cursor: pointer;
}

.container__subHeading:hover {
  opacity: 0.8;
}

.container__subHeading svg {
  fill: #fff;
}

.container__subHeading h2 {
  margin-left: 10px;
}

.container__subHeading h2 span {
  font-size: 1.5rem;
}

.container__reset {
  margin-top: 7rem;
  text-align: center;
}

.container__reset h2 {
  font-weight: 400;
  opacity: 0.3;
  cursor: pointer;
  -webkit-transition: 200ms all linear;
  transition: 200ms all linear;
}

.container__reset h2:hover {
  opacity: 1;
}

.creditContainer {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.creditContainer h4 {
  font-weight: regular;
  font-size: 1.5rem;
  color: #fff;
}

.creditContainer svg {
  padding-top: 5px;
  height: 40px;
}

.creditContainer a {
  margin-left: 5px;
  text-decoration: none;
  color: #ff1a55;
  opacity: 1;
  cursor: pointer;
}

.creditContainer__social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.creditContainer__social svg {
  margin-right: 20px;
  height: 20px;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
  opacity: 0.3;
  cursor: pointer;
}

.creditContainer__social svg:hover {
  opacity: 1;
}

.creditContainer__social svg:last-child {
  margin-right: 0;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 25%;
  margin: 0px auto;
  padding: 30px 30px;
  background-color: rgb(27, 27, 27);
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: #fff;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}

.modal-container h2 {
  font-size: 2rem;
  margin-top: 0;
  color: #ffffff;
  font-weight: Bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.116);
  padding-bottom: 20px;
}

.modal-container p {
  opacity: 0.5;
  font-size: 1.8rem;
  margin-top: 20px;
  color: #ffffff;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.modal-buttons button {
  background: none;
  font-size: 1.6rem;
  color: #fff;
  padding: 8px 20px;
  margin-right: 20px;
  outline: none;
  border: 1px solid grey;
  border-radius: 100px;
}

.modal-buttons button:last-child {
  background-color: #ff1a55;
  border: 1px solid #ff1a55;
}

.settings h2 {
  font-size: 3.5rem;
}

.settings h4 {
  margin-top: 3rem;
  font-size: 2.2rem;
}

.settings h4:last-child {
  margin-bottom: 3rem;
}

.settings h2 span {
  color: #fed62c;
}

.settings p {
  opacity: 0.9;
  margin-top: 10px;
  font-size: 1.8rem;
  line-height: 1.8;
}

.settings p a {
  color: rgb(61, 161, 255);
  text-decoration: none;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media only screen and (max-width: 1300px) {
  .modal-container {
    width: 50%;
  }
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 48.5%;
  }
}

@media only screen and (max-width: 600px) {
  html {
    font-size: 52.5%;
  }
  .settings img {
    width: 90%;
  }
}

@media only screen and (max-width: 800px) {
  .container {
    width: 80%;
  }
  .modal-container {
    width: 90%;
  }
}

/*# sourceMappingURL=main.css.map */
</style>
