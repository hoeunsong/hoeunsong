function goToThankYou(e) {
  e.target.submit(); // 폼 제출은 기본 방식으로 실행
  setTimeout(() => window.location.href = 'thankyou.html', 300); // 리디렉션
  return false;
}
