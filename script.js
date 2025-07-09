// 인피니트 슬라이더 수동 제어
const track = document.querySelector('.slider-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let scrollAmount = 0;
const slideWidth = track.children[0].getBoundingClientRect().width + 16; // padding

prev.addEventListener('click', () => {
  scrollAmount = Math.max(0, scrollAmount - slideWidth);
  track.style.transform = `translateX(-${scrollAmount}px)`;
});
next.addEventListener('click', () => {
  scrollAmount = Math.min(track.scrollWidth/2, scrollAmount + slideWidth);
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

// (선택) 자동 슬라이드 일시정지 on hover
document.querySelector('.slider-section')
  .addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
document.querySelector('.slider-section')
  .addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
