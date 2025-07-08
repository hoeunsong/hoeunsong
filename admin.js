// admin.js

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#consult-table tbody");
  const downloadBtn = document.getElementById("downloadBtn");

  // 로컬스토리지에서 데이터 불러오기
  const consults = JSON.parse(localStorage.getItem("consults") || "[]");

  // 테이블에 데이터 표시
  consults.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.type}</td>
      <td>${item.date}</td>
    `;
    tableBody.appendChild(tr);
  });

  // 엑셀(CSV) 다운로드
  downloadBtn.addEventListener("click", () => {
    const header = ["이름", "연락처", "보험유형", "신청일시"];
    const rows = consults.map(item => [
      `"${item.name}"`,
      `"=${item.phone}"`,
      `"${item.type}"`,
      `"${item.date}"`
    ]);

    const csvContent = [header.join(","), ...rows.map(r => r.join(","))].join("\n");
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "상담신청내역.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
});
