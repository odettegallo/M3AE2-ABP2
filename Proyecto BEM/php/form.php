<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['name']);
    $telefono = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Aquí puedes procesar los datos, como enviarlos por correo o guardarlos en una base de datos.
    echo "Gracias, $nombre. Hemos recibido tu mensaje: \"$mensaje\". Te contactaremos pronto al correo $email.";
} else {
    echo "Hubo un error al enviar el formulario.";
}
?>
