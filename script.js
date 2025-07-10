document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbx2u1WMTK473xMp4efFWt8BFSzHbhIFLEwWPWj0jNSA14hhW4Rba1JRLTN2IIuknwNUrQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.text();
  })
  .then(text => {
    // 성공하면 감사합니다 페이지로 이동
    window.location.href = 'thankyou.html';
  })
  .catch(error => {
    alert('제출 중 오류가 발생했습니다. 다시 시도해 주세요.');
    console.error(error);
  });
});
