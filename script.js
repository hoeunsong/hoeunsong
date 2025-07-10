// script.js
function submitToSheet(e) {
  e.preventDefault();
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
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(json => {
      if (json.result === 'success') {
        window.location.href = 'thankyou.html';
      } else {
        throw new Error(JSON.stringify(json));
      }
    })
    .catch(err => {
      console.error('submitToSheet error:', err);
      alert('제출에 실패했습니다. 콘솔을 확인해주세요.');
    });

  return false;
}
