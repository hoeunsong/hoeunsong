document.getElementById('consult-form').addEventListener('submit', function(e) {
  e.preventDefault(); // 기본 제출 막기

  const form = e.target;
  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbx2u1WMTK473xMp4efFWt8BFSzHbhIFLEwWPWj0jNSA14hhW4Rba1JRLTN2IIuknwNUrQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(text => {
    if (text.includes("성공") || text.includes("감사합니다")) {
      window.location.href = "thankyou.html";
    } else {
      alert("제출에 실패했습니다.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("서버 오류가 발생했습니다.");
  });
});
