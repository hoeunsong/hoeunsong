// script.js
console.log("✅ script.js 로딩됨");

document.getElementById("consult-form").addEventListener("submit", function(e) {
  e.preventDefault();  // 새로고침 막기
  console.log("✅ 폼 제출 감지됨");

  // 1) 폼 필드 값 읽기
  const name  = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type  = document.getElementById("type").value;

  // 2) 기존 저장값 꺼내오기 (없으면 빈 배열)
  const consults = JSON.parse(localStorage.getItem("consults") || "[]");
  
  // 3) 새 데이터 추가
  consults.push({ name, phone, type, date: new Date().toLocaleString() });
  
  // 4) 다시 localStorage에 저장
  localStorage.setItem("consults", JSON.stringify(consults));
  console.log("💾 localStorage에 저장된 consults:", consults);

  // 5) thankyou.html로 이동
  window.location.href = "thankyou.html";
});
