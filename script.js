console.log("✅ script.js 로딩됨");

document.getElementById("consult-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("✅ 폼 제출 감지됨");

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;

  fetch("https://script.google.com/macros/s/AKfycbzuC5-IWFstRcVONzG1_tQs-OLNg2nRP0Q4FW_vgS-waWsutl-KArvbAvUCS9xAqspn/exec", {
    method: "POST",
    body: JSON.stringify({ name, phone, type }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      console.log("✅ fetch 응답 받음", response.status);
      if (response.ok) {
        window.location.href = "thankyou.html";
      } else {
        alert("제출에 실패했습니다. 다시 시도해주세요.");
      }
    })
    .catch(error => {
      alert("에러가 발생했습니다: " + error);
    });
});
