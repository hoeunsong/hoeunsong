// script.js
console.log("✅ script.js 로딩됨");

document.getElementById("consult-form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("✅ 폼 제출 감지됨");

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const type = document.getElementById("type").value;

  // 기존 데이터 가져오기
  const consults = JSON.parse(localStorage.getItem("consults") || "[]");

  // 새 항목 추가 (timestamp 포함)
  consults.push({
    name,
    phone,
    type,
    timestamp: Date.now()
  });

  // 로컬스토리지에 저장
  localStorage.setItem("consults", JSON.stringify(consults));

  // 땡큐 페이지로 이동
  window.location.href = "thankyou.html";
});
