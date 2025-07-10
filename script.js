// ✅ script.js 내용은 이렇게만 있어야 정상 동작합니다
// 이 코드는 로컬 저장용일 뿐, 전송은 form action이 iframe으로 처리합니다
document.getElementById('consult-form').addEventListener('submit', function(e) {
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
});
