window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#consult-table tbody");
  const data  = JSON.parse(localStorage.getItem("consults") || "[]");

  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="4">신청 내역이 없습니다.</td></tr>`;
    return;
  }

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

  document.getElementById("downloadBtn").addEventListener("click", () => {
    let csv = ["이름","연락처","보험유형","신청시간"].join(",") + "\n";
    data.forEach(i => {
      csv += [
        i.name,
        i.phone,
        i.type,
        new Date(i.timestamp).toISOString()
      ].map(f => `"${f}"`).join(",") + "\n";
    });
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "상담신청내역.csv";
    a.click();
  });
});
