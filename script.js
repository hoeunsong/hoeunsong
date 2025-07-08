// 슬라이더 애니메이션 (CSS keyframes가 있을 경우 불필요)
// document.querySelector('.slider-track').style.animation = 'scroll 26s linear infinite';

document.getElementById("consult-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name  = document.getElementById("name").value.trim();
  const p1    = document.getElementById("phone1").value.trim();
  const p2    = document.getElementById("phone2").value.trim();
  const p3    = document.getElementById("phone3").value.trim();
  const type  = document.getElementById("type").value;
  const phone = `${p1}-${p2}-${p3}`;

  const consults = JSON.parse(localStorage.getItem("consults") || "[]");
  consults.push({ name, phone, type, timestamp: Date.now() });
  localStorage.setItem("consults", JSON.stringify(consults));

  window.location.href = "thankyou.html";
});
