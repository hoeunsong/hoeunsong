// 슬라이더 : 무한 자동 스크롤 + 버튼 제어
const track = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideWidth = document.querySelector('.slide').offsetWidth + 20; // margin
let position = 0;

// 버튼 클릭으로 수동 이동
prevBtn.addEventListener('click', ()=> {
  position = Math.max(0, position - slideWidth);
  track.style.transform = `translateX(-${position}px)`;
});
nextBtn.addEventListener('click', ()=> {
  position = Math.min(track.scrollWidth / 2, position + slideWidth);
  track.style.transform = `translateX(-${position}px)`;
});

// 마우스 오버 시 자동 애니메이션 일시정지
document.querySelector('.slider-container')
  .addEventListener('mouseenter', ()=> track.style.animationPlayState = 'paused');
document.querySelector('.slider-container')
  .addEventListener('mouseleave', ()=> track.style.animationPlayState = 'running');

// (추가) 빠른 상담 폼 제출 처리
document.getElementById('consult-form').addEventListener('submit', e => {
  // 기본 서브밋 → thankyou.html 로 리다이렉트
  e.preventDefault();
  window.location.href = 'thankyou.html';
});
// script.js

document.getElementById("consult-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name  = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type  = document.getElementById("type").value;

  if (!name || !phone || !type) {
    alert("모든 항목을 채워주세요.");
    return;
  }

  // 기존 로컬스토리지 저장 로직
  const consults = JSON.parse(localStorage.getItem("consults") || "[]");
  consults.push({
    name,
    phone,
    type,
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("consults", JSON.stringify(consults));

  // 성공 시 Thank you 로 이동
  window.location.href = "thankyou.html";
});
