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

  const name    = document.getElementById("name").value.trim();
  const carrier = document.getElementById("carrier").value;
  const p1      = document.getElementById("phone1").value.trim();
  const p2      = document.getElementById("phone2").value.trim();
  const p3      = document.getElementById("phone3").value.trim();
  const type    = document.getElementById("type").value;

  if (!name || !carrier || !p1 || !p2 || !p3 || !type) {
    alert("모든 항목을 채워주세요.");
    return;
  }

  const phone = `${carrier}-${p1}-${p2}-${p3}`;

  const consults = JSON.parse(localStorage.getItem("consults") || "[]");
  consults.push({
    name,
    phone,
    type,
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem("consults", JSON.stringify(consults));

  window.location.href = "thankyou.html";
});
console.log("✅ script.js 로딩됨");

document.getElementById("consult-form").addEventListener("submit", function(e) {
  console.log("✅ 폼 제출! Formspree로 보내는 중...");
  // Formspree는 form 자체가 action/post 처리하므로 JS로 추가 작업은 없습니다.
  // (단, 필요 시 여기서 추가 유효성 검사나 로딩 UI 삽입 가능)
});
