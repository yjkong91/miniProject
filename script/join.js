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
      document.getElementById('postcode_txt').value = data.zonecode;
      document.getElementById("address").value = roadAddr;
    }
  }).open();
}

// 정규식 조건
const regexId = /^[a-zA-Z0-9]{6,20}$/;
const regexPw = /^[A-Za-z\d]{6,}$/;
const regexName = /[가-힣]{2,}/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;
const regexMail = /.+@[a-z]+(\.[a-z]+){1,2}$/;

// 올바르게 입력했는지를 저장해주는 변수들
let isId = false;
let isPw = false;
let isName = false;
let isTel = false;
let isEmail = false;

// 유효성 검사 후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let nameCheck = document.querySelector('.name_input_check')
let emailCheck = document.querySelector('.email_input_check');
let telCheck = document.querySelector('.tel_input_check');

document.querySelector('#id_txt').addEventListener('keyup', function () {
  let val = document.querySelector('#id_txt').value;
  console.log(val);

  isId = regexId.test(val);
  showMsg(isId, idCheck);
});

let pw;
document.querySelector('#pw_txt').addEventListener('keyup', function () {
  pw = document.querySelector('#pw_txt').value;

  isPw = regexPw.test(pw);
  showMsg(isPw, pwCheck);
});

document.querySelector('#repw').addEventListener('keyup', function () {
let dbpw = document.querySelector('#repw').value;
if (pw === dbpw) {
  document.querySelector('.dbpw_input_check').innerHTML = '비밀번호가 일치합니다.';
  document.querySelector('.dbpw_input_check').style.color = 'blue';
} else {
  document.querySelector('.dbpw_input_check').innerHTML = '비밀번호가 일치하지 않습니다.';
  document.querySelector('.dbpw_input_check').style.color = 'red';
}});


document.querySelector('#name_txt').addEventListener('keyup', function () {
  let val = document.querySelector('#name_txt').value;

  isName = regexName.test(val);
  showMsg(isName, nameCheck);
});

document.querySelector('#tel_txt').addEventListener('keyup', function () {
  let val = document.querySelector('#tel_txt').value;

  isTel = regexTel.test(val);
  showMsg(isTel, telCheck);
});

document.querySelector('#email_txt').addEventListener('keyup', function () {
  let val = document.querySelector('#email_txt').value;

  isEmail = regexMail.test(val);
  showMsg(isEmail, emailCheck);
});


function showMsg(isX, xCheck) {
  if (isX) {
    xCheck.innerHTML = "";
    xCheck.style.color = 'blue';
  } else {
    xCheck.innerHTML = "잘못 입력 하셨습니다.";
    xCheck.style.color = 'red';
  }

  isOk();
}