window.addEventListener("click", async (e) => {
  if (e.target.tagName === "CODE") {
    try {
      await navigator.clipboard.writeText(e.target.innerText);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Code copied successfully!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Failed to copy code!",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  }
});
