
function subir() {
    var formulario = "";
    var usuario = document.form.username.value;
    var email = document.form.email.value;
    var password = document.form.password.value;
    var confirmpassword = document.form.confirmpassword.value;


    // Condiciones de validadcion para cada texto
    if (usuario == "") {
        document.getElementById('text').value = ("Usuario no valido");
        return false;
    }
    if (email == "") {
        document.getElementById('text').value = ("Email no valido");
        return false;
    }
    if (password != confirmpassword || password == "") {
        document.getElementById('text').value = ("Las contraseñas no coinciden");
        return false;
    }


    formulario = ' Usuario: ' + usuario + ', Email: ' + email + ', Password: ' + password;
    document.getElementById('text').value = formulario;
    document.getElementById("usuario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";

}

