"use strict";

const myArray1 = ['chair', 'bed', 'table', 'sofa', 'sofa-bed', 'accent-table', 'malm-dresser', 'shelves', 'wooden-table'];
const myArray2 = [
'Design by Eric Montanah.',
'Design by Curtis Adams.',
'Design by Juan Pablo Serrano Arenas.',
'Design by Martin Pechy',
'Design by Victoria Borodinova',
'Design by Medhat Ayad',
'Design by Daria Shevtsova.',
'Design by Tatiana Syrikova',
'Design by Nugroho Wahyu'
];


const button = document.querySelector('button');
const gallery = document.querySelector('#gallery');
const figcaption = document.querySelector('figcaption');
  
button.onclick = function() {

const num = Math.floor(Math.random() * myArray1.length);
  
gallery.src = `images/${myArray1[num]}.jpg`;
gallery.alt = `${myArray1[num]}`;
figcaption.innerHTML = `${myArray2[num]}`;
}