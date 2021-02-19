"use strict";

const body = document.querySelector('body');
const input = document.querySelector('input');
const label = document.querySelector('label');

input.onclick = function() {
  if(body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    label.innerHTML = 'Day Mode';
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    label.innerHTML = 'Night Mode'
  }
}