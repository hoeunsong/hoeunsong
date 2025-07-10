// script.js

/**
 * 폼 제출 시 호출됩니다.
 * Google Apps Script 엔드포인트로 데이터를 POST 한 뒤,
 * 성공 시 ‘thankyou.html’ 로 이동합니다.
 */
function submitToSheet(e) {
  e.preventDefault();   // 기본 폼 제출 동작 차단
  const form = e.target;

  // 폼 데이터 객체로 추출
  const data = {
    name:    form.name.value,
    carrier: form.carrier.value,
    phone1:  form.phone1.value,
    phone2:  form.phone2.value,
    phone3:  form.phone3.value,
    type:    form.type.value
  };

  // Fetch API 로 POST
  fetch(form.action, {
    method: 'POST',
    body:   JSON.stringify(data),
    headers:{ 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(() => {
    // 성공 시 감사합니다 페이지로 리다이렉트
    window.location.href = 'thankyou.html';
  })
  .catch(err => {
    console.error('제출 오류:', err);
    alert('제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
  });

  return false;  // 폼의 기본 동작(iframe 제출)도 차단
}
