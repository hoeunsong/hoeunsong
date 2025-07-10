document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 막기

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbx2u1WMTK473xMp4efFWt8BFSzHbhIFLEwWPWj0jNSA14hhW4Rba1JRLTN2IIuknwNUrQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(text => {
    if (text.includes("성공") || text.includes("success")) {
      window.location.href = "thankyou.html"; // 감사합니다 페이지로 이동
    } else {
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("서버 오류가 발생했습니다.");
  });
});
