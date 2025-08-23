document.querySelectorAll(".btn-delete").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialogModal = document.querySelector("#deleteModal form");
    dialogModal.action = `/delete/${btn.dataset.id}`;
  });
});
