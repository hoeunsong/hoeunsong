document.addEventListener('DOMContentLoaded', () => {
  // 슬라이더 초기화
  const slider = document.querySelector('.slider');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slides = Array.from(slider.children);
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // margin 포함
  let index = 0;

  prev.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
  });
  next.addEventListener('click', () => {
    index = Math.min(index + 1, slides.length - 1);
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
  });

  // 폼 제출
  document.getElementById('consult-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // 여기에 실제 전송 로직 추가 또는 리디렉션
    alert('상담 신청이 접수되었습니다!');
    e.target.reset();
  });
});
