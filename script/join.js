let box01 = document.querySelector('.box01');

console.log(box01.scrollHeight);
console.log(box01.clientHeight);

let boxHeight01 = box01.scrollHeight - box01.clientHeight - 5;
let isDisable01 = true;

box01.addEventListener('scroll', function() {
  // console.log(box.scrollTop);

  if( isDisable01 && (box01.scrollTop >= boxHeight01) ) {
    document.querySelector('#chk01').disabled = false;
    isDisable01 = false;
  }

});

let box02 = document.querySelector('.box02');

console.log(box02.scrollHeight);
console.log(box02.clientHeight);

let boxHeight02 = box02.scrollHeight - box02.clientHeight - 5;
let isDisable02 = true;

box02.addEventListener('scroll', function() {
  // console.log(box.scrollTop);

  if( isDisable02 && (box02.scrollTop >= boxHeight02) ) {
    document.querySelector('#chk02').disabled = false;
    isDisable02 = false;
  }

});