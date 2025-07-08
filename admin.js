// admin.js
console.log("✅ admin.js 로딩됨");

const tableBody = document.querySelector("#consult-table tbody");
const data = JSON.parse(localStorage.getItem("consults") || "[]");
console.log("localStorage에 저장된 consults:", data);

data.forEach(entry => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${entry.name}</td>
    <td>${entry.phone}</td>
    <td>${entry.type}</td>
  `;
  tableBody.appendChild(tr);
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const header = ["이름", "연락처", "보험유형"];
  const rows = data.map(e => [e.name, e.phone, e.type]);
  const csv = [header, ...rows].map(r => r.join(",")).join("\\n");
  const blob = new Blob(["\\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "상담신청내역.csv";
  link.click();
});
