const form = document.querySelector("#contact-form");

if (form) {
  const fields = [
    {
      input: document.querySelector("#name"),
      error: document.querySelector("#name-error"),
      message: "Please enter your name.",
    },
    {
      input: document.querySelector("#email"),
      error: document.querySelector("#email-error"),
      message: "Please enter a valid email address.",
    },
    {
      input: document.querySelector("#message"),
      error: document.querySelector("#message-error"),
      message: "Please enter a message.",
    },
  ];

  function validateField(field) {
    let valid = field.input.value.trim() !== "";

    if (field.input.type === "email" && valid) {
      valid = field.input.validity.valid;
    }

    field.input.setAttribute("aria-invalid", String(!valid));

    field.error.textContent = valid ? "" : field.message;

    return valid;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const results = fields.map(validateField);
    const status = document.querySelector("#form-status");

    if (results.every(Boolean)) {
      status.textContent =
        "Your information looks good. This demonstration form does not send messages.";
    } else {
      status.textContent = "Please correct the errors shown in the form.";

      const firstInvalid = fields.find(
        (field) => field.input.getAttribute("aria-invalid") === "true",
      );

      firstInvalid.input.focus();
    }
  });
}
