// 폼 제출 → thankyou.html
document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // 1) 입력값 가져오기
  const name   = document.getElementById('name').value;
  const phone1 = document.getElementById('phone1').value;
  const phone2 = document.getElementById('phone2').value;
  const phone3 = document.getElementById('phone3').value;
  const type   = document.getElementById('type').value;
  const phone  = `${phone1}-${phone2}-${phone3}`;

  // 2) 기존 배열 불러오기
  const consults = JSON.parse(localStorage.getItem('consults') || '[]');

  // 3) 새 항목 추가
  consults.push({
    name,
    phone,
    type,
    timestamp: Date.now()
  });

  // 4) 다시 저장
  localStorage.setItem('consults', JSON.stringify(consults));

  // 5) 완료 페이지로 이동
  window.location.href = 'thankyou.html';
});

  window.location.href = 'thankyou.html';
});
