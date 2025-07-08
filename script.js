document.addEventListener('DOMContentLoaded', () => {
  // 폼 제출만 처리 (슬라이더는 CSS 애니메이션)
  document.getElementById('consult-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('상담 신청이 완료되었습니다!');
    e.target.reset();
  });
});
