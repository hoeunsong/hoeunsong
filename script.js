document.getElementById("consult-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;

  fetch("https://script.google.com/macros/s/여기_your_script_ID/exec", {
    method: "POST",
    body: JSON.stringify({ name, phone, type }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "thankyou.html";
    } else {
      alert("제출 실패");
    }
  })
  .catch(error => {
    alert("에러 발생: " + error);
  });
});
