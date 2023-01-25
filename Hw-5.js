'use strict';
const providesItems = document.querySelectorAll('.provides-Item');
const discription = document.querySelectorAll('.discription');
const month = document.getElementById('month');
const year = document.getElementById('year');
const inherit = document.getElementById('inherit');
const border = document.getElementById('border');
const priceItem = document.querySelectorAll('.priceItem');
const priceItemTop = document.querySelectorAll('.price-item-top');
const priceItemBottom = document.querySelectorAll('.price-item-bottom');
const btn1 = document.querySelectorAll('.btn1');
const reviewItems = document.querySelectorAll('.reviewItems');

providesItems.forEach(item =>
  item.addEventListener('click', function handlebgcolor() {
    discription.forEach(item => item.classList.remove('active'));
    this.childNodes[3].classList.add('active');
  })
);
border.addEventListener('click', function handle() {
  if (inherit.style.left === '0.2rem') {
    inherit.style.left = '3rem';
  } else {
    inherit.style.left = '0.2rem';
  }
});

month.addEventListener('click', function handlemonth() {
  inherit.style.left = '0.2rem';
});
year.addEventListener('click', function handlemonth() {
  inherit.style.left = '3rem';
});

priceItem.forEach(item =>
  item.addEventListener('click', function handeWave() {
    priceItemTop.forEach(item => item.classList.remove('active'));
    this.childNodes[1].classList.add('active');
    btn1.forEach(item => item.classList.remove('active'));
    this.childNodes[3].childNodes[7].classList.add('active');
  })
);

reviewItems.forEach(item =>
  item.addEventListener('click', function handleRwiev() {
    
  })
);
