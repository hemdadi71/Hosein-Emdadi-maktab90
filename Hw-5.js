'use strict';
const notification = document.getElementById('notification');
const showNotification = (top, right, html, className) => {
  notification.style.top = `${top}rem`;
  notification.style.right = `${right}rem`;
  notification.innerHTML = `${html}`;
  notification.classList.add(`${className}`);
};
showNotification(10, 30, 'Hello', 'hover');
