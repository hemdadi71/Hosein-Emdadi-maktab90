'use strict';
const ask = (question, yes, no) => {
  if (confirm(question)) {
    return yes();
  } else {
    return no();
  }
};
ask(
  'Do you agree',
  () => {
    alert('You agreed.');
  },
  () => {
    alert('You canceled the execution.');
  }
);
