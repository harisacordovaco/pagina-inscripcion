document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Aquí puedes agregar validaciones si lo deseas

        successMessage.textContent = "¡Formulario enviado con éxito!";
        successMessage.style.display = "block";

        // Limpiar los campos después de un envío exitoso
        form.reset();

        // Ocultar mensaje después de unos segundos
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    });
});