// SSLIDER 자동은 CSS, JS 불필요
// 폼 제출 → thankyou.html
document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'thankyou.html';
});
