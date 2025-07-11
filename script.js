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
    if (text.trim() === 'ok') {
      window.location.href = 'thankyou.html'; // 성공 시 이동
    } else {
      throw new Error('서버 응답이 ok가 아님: ' + text);
    }
  })
  .catch(error => {
    alert('제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
    console.error(error);
  });
});
