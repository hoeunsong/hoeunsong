// 폼 제출 시 알림
document.getElementById('consult-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('상담 신청이 완료되었습니다!');
  e.target.reset();
});
