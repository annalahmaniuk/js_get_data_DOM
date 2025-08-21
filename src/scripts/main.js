'use strict';

const spans = document.querySelectorAll('.population');

let cleanSpans = [...spans];

cleanSpans = cleanSpans.map((span) => {
  return Number(span.innerText.replaceAll(',', ''));
});

const total = cleanSpans.reduce((result, num) => {
  return result + num;
}, 0);

const average = Math.round(total / cleanSpans.length);

document.querySelector('.average-population').innerText = String(average);

document.querySelector('.total-population').innerText = total.toLocaleString();
