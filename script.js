// script.js
document.getElementById('consult-form')
  .addEventListener('submit', () => {
    // 0.5초 뒤에 'thankyou.html'로 이동
    setTimeout(() => {
      window.location.href = 'thankyou.html';
    }, 500);
});
