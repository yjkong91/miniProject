let box01 = document.querySelector('.box01');

console.log(box01.scrollHeight);
console.log(box01.clientHeight);

let boxHeight01 = box01.scrollHeight - box01.clientHeight - 5;
let isDisable01 = true;

box01.addEventListener('scroll', function () {
  // console.log(box.scrollTop);

  if (isDisable01 && (box01.scrollTop >= boxHeight01)) {
    document.querySelector('#chk01').disabled = false;
    isDisable01 = false;
  }

});

let box02 = document.querySelector('.box02');

console.log(box02.scrollHeight);
console.log(box02.clientHeight);

let boxHeight02 = box02.scrollHeight - box02.clientHeight - 5;
let isDisable02 = true;

box02.addEventListener('scroll', function () {
  // console.log(box.scrollTop);

  if (isDisable02 && (box02.scrollTop >= boxHeight02)) {
    document.querySelector('#chk02').disabled = false;
    isDisable02 = false;
  }

});

let chk01 = document.querySelector('#chk01').checked;
let chk02 = document.querySelector('#chk02').checked;
if (chk01 && chk02) {} else {}


function sample4_execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
      // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      let roadAddr = data.roadAddress; // 도로명 주소 변수
      let extraRoadAddr = ''; // 참고 항목 변수
      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('postcode').value = data.zonecode;
      document.getElementById("address").value = roadAddr;
    }
  }).open();
}

// 정규식 조건
const regexId = /^[a-z][a-z\d]{6,}$/;
const regexPw = /^[A-Za-z\d]{8,}$/;
const regexName = /[가-힣]{2,}/;
const regexTel = /^01\d\d{3,4}\d{4}$/;
const regexMail = /.+@[a-z]+(\.[a-z]+){1,2}$/;

