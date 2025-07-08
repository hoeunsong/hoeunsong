// 폼 제출 → thankyou.html
document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // TODO: 구글 시트 연동 로직 추가 가능
  window.location.href = 'thankyou.html';
});
