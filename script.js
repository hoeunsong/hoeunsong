document.addEventListener('DOMContentLoaded',()=> {
  const track = document.querySelector('.slider-track');
  const slides = Array.from(track.children);
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slideWidth = slides[0].getBoundingClientRect().width + 20;
  let idx = 0;

  prev.addEventListener('click', ()=>{
    idx = Math.max(idx-1, 0);
    track.scrollLeft = slideWidth * idx;
  });
  next.addEventListener('click', ()=>{
    idx = Math.min(idx+1, slides.length-1);
    track.scrollLeft = slideWidth * idx;
  });

  // 폼 제출 (샘플)
  document.getElementById('consult-form').addEventListener('submit', e=>{
    e.preventDefault();
    // 실제 연동 로직 추가 가능
    alert('상담 신청이 완료되었습니다!');
    e.target.reset();
  });
});
