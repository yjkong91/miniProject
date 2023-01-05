let box01 = document.querySelector('.box01');

console.log(box01.scrollHeight);
console.log(box01.clientHeight);

let boxHeight = box01.scrollHeight - box01.clientHeight - 5;
let isDisable = true;

box01.addEventListener('scroll', function() {
  // console.log(box.scrollTop);

  if( isDisable && (box.scrollTop >= boxHeight) ) {
    document.querySelector('#chk01').disabled = false;
    isDisable = false;
  }

});