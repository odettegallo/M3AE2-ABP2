document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", function(event) {
        
        if (!validar()) {
            event.preventDefault(); // Evita el envío del formulario si la validación falla
        }
    });
});

function validar() {


    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;


    if (nombre === "" || telefono === "" || email === ""  || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        // alert("El nombre solo debe contener letras y espacios.");
        document.getElementById("errorName").textContent = "El nombre solo debe contener letras y espacios.";   
        return false;
    }

    if (nombre.length < 2) {
        // alert("El nombre debe tener al menos 3 caracteres.");
        document.getElementById("errorName").textContent = "El nombre debe tener al menos 2 caracteres.";
        return false;
    } else {
        document.getElementById("errorName").textContent = "";
    }

    if (!/^\d{9}$/.test(telefono)) {
        // alert("El teléfono debe contener 9 dígitos.");
        document.getElementById("errorPhone").textContent = "El teléfono debe contener 9 dígitos.";
        return false;
    } else {
        document.getElementById("errorPhone").textContent = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        // alert("Por favor, introduce un correo electrónico válido.");
        document.getElementById("errorEmail").textContent = "Por favor, introduce un correo electrónico válido.";
        return false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }


    if (mensaje.length < 10) {
        // alert("El mensaje debe tener al menos 10 caracteres.");
        document.getElementById("errorMessage").textContent = "El mensaje debe tener al menos 10 caracteres.";
        return false;
    } else {
        document.getElementById("errorMessage").textContent = "";
    }

    return true;



}
