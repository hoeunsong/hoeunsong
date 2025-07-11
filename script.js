document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://hoeunsong.rf.gd/submit.php', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.text();
  })
  .then(text => {
    console.log('서버 응답:', text);  // 콘솔에서 확인 가능
    if (text.trim() === 'ok') {
      window.location.href = 'thankyou.html'; // 성공 시 이동
    } else {
      throw new Error('서버로부터 예상치 못한 응답: ' + text);
    }
  })
  .catch(error => {
    alert('제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
    console.error('에러 상세:', error);
  });
});
