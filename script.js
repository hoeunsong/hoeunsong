// script.js
function submitToSheet(e) {
  e.preventDefault();               // 폼 기본 제출 동작 막기
  const form = e.target;
  const payload = {
    name:    form.name.value,
    carrier: form.carrier.value,
    phone1:  form.phone1.value,
    phone2:  form.phone2.value,
    phone3:  form.phone3.value,
    type:    form.type.value
  };

  fetch(form.action, {
    method:  'POST',
    body:    JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(() => {
      // 성공 시 thankyou.html 로 이동
      window.location.href = 'thankyou.html';
    })
    .catch(err => {
      console.error('전송 실패', err);
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    });

  return false;  // onsubmit 리턴으로 폼 제출 차단
}
