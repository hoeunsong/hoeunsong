document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 기본 제출 막음

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        window.location.href = 'thankyou.html'; // 반드시 thankyou.html이 존재해야 함
      } else {
        alert('제출에 실패했습니다.');
      }
    })
    .catch(() => {
      alert('서버 오류가 발생했습니다.');
    });
});
