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
  prev.addEventListener('click', () => move(Math.max(idx - 1, 0)));
  next.addEventListener('click', () => move(Math.min(idx + 1, slides.length - 1)));

  function startAuto() {
    autoId = setInterval(() => {
      idx = (idx + 1) % slides.length;
      move(idx);
    }, 3000);
  }
  document.querySelector('.slider-wrapper')?.addEventListener('mouseenter', () => clearInterval(autoId));
  document.querySelector('.slider-wrapper')?.addEventListener('mouseleave', startAuto);

  startAuto();

  // 폼 제출
  document.getElementById('consult-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다!');
    e.target.reset();
  });
});
