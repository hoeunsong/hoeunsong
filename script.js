// script.js

document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // 1) 로컬 저장 (브라우저 내 저장)
  const form = e.target;
  const data = {
    name: form.name.value,
    carrier: form.carrier.value,
    phone: `${form.phone1.value}-${form.phone2.value}-${form.phone3.value}`,
    type: form.type.value,
    time: new Date().toLocaleString()
  };
  const list = JSON.parse(localStorage.getItem('consults') || '[]');
  list.push(data);
  localStorage.setItem('consults', JSON.stringify(list));

  // 2) Thankyou 페이지로 이동
  window.location.href = 'thankyou.html';
});
function submitToSheet(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    carrier: form.carrier.value,
    phone1: form.phone1.value,
    phone2: form.phone2.value,
    phone3: form.phone3.value,
    type: form.type.value
  };
  
  fetch(form.action, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(r => r.json())
  .then(() => {
    window.location.href = 'thankyou.html';
  })
  .catch(console.error);

  return false;
}
