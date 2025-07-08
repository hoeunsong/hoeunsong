// 슬라이더 버튼 제어 (자동 애니메이션은 CSS Keyframes)
const track = document.querySelector('.track');
document.querySelector('.prev').addEventListener('click', () => {
  track.scrollBy({ left: -190, behavior: 'smooth' });
});
document.querySelector('.next').addEventListener('click', () => {
  track.scrollBy({ left:  190, behavior: 'smooth' });
});

// 폼 제출 → thankyou.html
document.getElementById('consult-form').addEventListener('submit', e => {
  e.preventDefault();
  // (여기서 구글 시트 전송 로직 추가 가능)
  window.location.href = 'thankyou.html';
});
