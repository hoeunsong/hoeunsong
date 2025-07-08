// 화살표 클릭 시 일시정지 후 스크롤
document.querySelector('.prev').addEventListener('click', () => {
  const track = document.querySelector('.track');
  track.style.animationPlayState = 'paused';
  track.scrollBy({ left: -200, behavior: 'smooth' });
});
document.querySelector('.next').addEventListener('click', () => {
  const track = document.querySelector('.track');
  track.style.animationPlayState = 'paused';
  track.scrollBy({ left: 200, behavior: 'smooth' });
});

// 폼 제출 처리
document.getElementById('consult-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('상담 신청이 완료되었습니다!');
  this.reset();
});
