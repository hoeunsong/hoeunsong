// script.js
document.getElementById('consult-form').addEventListener('submit', function(e) {
  // 로컬 스토리지 저장 (원하신다면)
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

  // 폼은 기본 동작대로 iframe 으로 제출됩니다.
});
