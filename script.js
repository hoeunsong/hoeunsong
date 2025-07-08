document.addEventListener('DOMContentLoaded', () => {
  const track   = document.querySelector('.slider-track');
  const slides  = Array.from(track.children);
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const wrapper = document.querySelector('.slider-wrapper');
  const slideW  = slides[0].getBoundingClientRect().width + 20; // margin 포함
  let index     = 0;
  let autoId;

  // 슬라이드 이동
  function goTo(i) {
    index = i;
    track.style.transform = `translateX(-${slideW * index}px)`;
  }

  // 이전/다음
  prevBtn.addEventListener('click', () => goTo(Math.max(index - 1, 0)));
  nextBtn.addEventListener('click', () => goTo(Math.min(index + 1, slides.length - 1)));

  // 자동 재생
  function startAuto() {
    autoId = setInterval(() => {
      index = (index + 1) % slides.length;
      goTo(index);
    }, 3000);
  }

  // 마우스 오버 시 일시정지
  wrapper.addEventListener('mouseenter', () => clearInterval(autoId));
  wrapper.addEventListener('mouseleave', startAuto);

  // 초기 시작
  startAuto();

  // 폼 제출 (샘플)
  document.getElementById('consult-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다!');
    e.target.reset();
  });
});
