// script.js

// 상담 신청 폼 제출 처리
const form = document.getElementById('consult-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name  = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const type  = document.getElementById('type').value;

  if (!name || !phone || !type) {
    alert('모든 항목을 입력해 주세요.');
    return;
  }

  const entry = { name, phone, type, date: new Date().toLocaleString() };
  const stored = JSON.parse(localStorage.getItem('consults') || '[]');
  stored.push(entry);
  localStorage.setItem('consults', JSON.stringify(stored));

  // 완료 페이지로 이동
  window.location.href = 'thankyou.html';
});
