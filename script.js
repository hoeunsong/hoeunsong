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
