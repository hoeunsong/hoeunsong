// admin.js
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#consult-table tbody");
  const data = JSON.parse(localStorage.getItem("consults") || "[]");

  // 테이블 채우기
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">신청 내역이 없습니다.</td></tr>`;
  } else {
    tbody.innerHTML = "";  // 초기화
    data.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.type}</td>
        <td>${new Date(item.timestamp).toLocaleString()}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  // CSV 다운로드
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const rows = JSON.parse(localStorage.getItem("consults") || "[]");
    if (rows.length === 0) {
      return alert("저장된 신청 내역이 없습니다.");
    }

    // 헤더
    const header = ["이름","연락처","보험유형","신청시간"];
    let csv = header.join(",") + "\n";

    // 내용
    rows.forEach(r => {
      const time = new Date(r.timestamp).toLocaleString();
      const line = [r.name, r.phone, r.type, time]
        .map(f => `"${f}"`)
        .join(",");
      csv += line + "\n";
    });

    // BOM + Blob
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "상담신청내역.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
