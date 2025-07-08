document.addEventListener('DOMContentLoaded', () => {
  const track   = document.querySelector('.slider-track');
  const slides  = Array.from(track.children);
  const prev    = document.querySelector('.prev');
  const next    = document.querySelector('.next');
  const slideW  = slides[0].getBoundingClientRect().width + 20;
  let idx       = 0;
  let autoId;

  function move(i) {
    idx = i;
    track.style.transform = `translateX(-${slideW * idx}px)`;
  }

  prev.addEventListener('click', () => move((idx - 1 + slides.length) % slides.length));
  next.addEventListener('click', () => move((idx + 1) % slides.length));

  function startAuto() {
    autoId = setInterval(() => {
      move((idx + 1) % slides.length);
    }, 1000);  // 1초 간격
  }

  document.querySelector('.slider-wrapper')
    .addEventListener('mouseenter', () => clearInterval(autoId));
  document.querySelector('.slider-wrapper')
    .addEventListener('mouseleave', startAuto);

  startAuto();

  document.getElementById('consult-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다!');
    e.target.reset();
  });
});
