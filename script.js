// script.js
console.log("✅ script.js (localStorage 버전) 로딩됨");

document.getElementById("consult-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // 1) 폼 값 읽기
  const name  = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const type  = document.getElementById("type").value;

  // 2) 기존 데이터 꺼내오기 (없으면 빈 배열)
  const consults = JSON.parse(localStorage.getItem("consults") || "[]");

  // 3) 새 엔트리 추가
  consults.push({
    name: name,
    phone: phone,
    type: type,
    date: new Date().toLocaleString()
  });

  // 4) 다시 저장
  localStorage.setItem("consults", JSON.stringify(consults));
  console.log("💾 localStorage에 저장된 개수:", consults.length);

  // 5) thankyou.html로 이동
  window.location.href = "thankyou.html";
});
