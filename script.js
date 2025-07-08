// 폼 제출 처리
document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('상담 신청이 완료되었습니다!');
  this.reset();
});
