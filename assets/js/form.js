document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".email-form");
    const loading = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const successMessage = document.querySelector(".sent-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      loading.style.display = "block";
      errorMessage.style.display = "none";
      successMessage.style.display = "none";
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          loading.style.display = "none";
  
          if (response.ok) {
            successMessage.style.display = "block";
            form.reset();
  
            // Redirect after showing success (optional)
            setTimeout(() => {
              window.location.href = form.querySelector('input[name="_next"]').value;
            }, 1500);
          } else {
            throw new Error("Failed to send. Please try again.");
          }
        })
        .catch(() => {
          loading.style.display = "none";
          errorMessage.innerHTML = "Failed to connect. Check your internet or try again later.";
          errorMessage.style.display = "block";
        });
    });
  });
  