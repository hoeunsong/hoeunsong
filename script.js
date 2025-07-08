// script.js

// 폼 제출 시 localStorage에 저장 후 thankyou.html로 이동
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('consult-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name  = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const type  = document.getElementById('type').value;

    if (!name || !phone || !type) {
      alert('모든 항목을 입력해 주세요.');
      return;
    }

    // 기존 데이터 로드
    const consults = JSON.parse(localStorage.getItem('consults') || '[]');
    // 새 데이터 추가
    consults.push({ name, phone, type, date: new Date().toLocaleString() });
    // 저장
    localStorage.setItem('consults', JSON.stringify(consults));

    // 완료 페이지로 이동
    window.location.href = 'thankyou.html';
  });
});
// ► 비교 슬라이더 기능
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.compare-section .slider');
  const prevBtn = document.querySelector('.compare-section .prev');
  const nextBtn = document.querySelector('.compare-section .next');
  const slideCount = slider.children.length;
  const slideWidth = slider.children[0].getBoundingClientRect().width + 16; // margin 포함
  let idx = 0;

  prevBtn.addEventListener('click', () => {
    idx = Math.max(idx - 1, 0);
    slider.style.transform = `translateX(-${slideWidth * idx}px)`;
  });
  nextBtn.addEventListener('click', () => {
    idx = Math.min(idx + 1, slideCount - 1);
    slider.style.transform = `translateX(-${slideWidth * idx}px)`;
  });
});
