function submitToSheet(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name:    form.name.value,
    carrier: form.carrier.value,
    phone1:  form.phone1.value,
    phone2:  form.phone2.value,
    phone3:  form.phone3.value,
    type:    form.type.value
  };

  fetch(form.action, {
    method: 'POST',
    body:   JSON.stringify(data),
    headers:{ 'Content-Type': 'application/json' }
  })
  .then(r => r.json())
  .then(() => {
    window.location.href = 'thankyou.html';
  })
  .catch(err => {
    console.error(err);
    alert('제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
  });

  return false;
}
