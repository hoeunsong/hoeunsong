// admin.js
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#consult-table tbody");
  const data  = JSON.parse(localStorage.getItem("consults") || "[]");

  // 테이블 채우기
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">신청 내역이 없습니다.</td></tr>`;
  } else {
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

  // 다운로드 버튼 핸들러
  const btn = document.getElementById("downloadBtn");
  btn.addEventListener("click", () => {
    if (data.length === 0) {
      return alert("저장된 신청 내역이 없습니다.");
    }

    // CSV 생성
    const header = ["이름","연락처","보험유형","신청시간"];
    let csv = header.join(",") + "\n";
    data.forEach(item => {
      const row = [
        item.name,
        item.phone,
        item.type,
        new Date(item.timestamp).toISOString()
      ];
      csv += row.map(f => `"${f}"`).join(",") + "\n";
    });

    // 다운로드
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "상담신청내역.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
