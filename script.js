document.getElementById('consult-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const type = document.getElementById('type').value;

  if (!name || !phone || !type) {
    alert('모든 항목을 입력해 주세요.');
    return;
  }

  const newEntry = { name, phone, type };

  const stored = JSON.parse(localStorage.getItem('consults') || '[]');
  stored.push(newEntry);
  localStorage.setItem('consults', JSON.stringify(stored));

  window.location.href = 'thankyou.html';
});
