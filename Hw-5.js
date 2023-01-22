'use strict';
const form = document.getElementById('form');
const sendData = () => {
  form.reset();
};
form.addEventListener('submit', sendData);
