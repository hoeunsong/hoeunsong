document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://hoeunsong.rf.gd/save.php', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.text();
  })
  .then(() => {
    window.location.href = 'thankyou.html'; // 성공 시 이동
  })
  .catch(error => {
    alert('제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
    console.error(error);
  });
});
