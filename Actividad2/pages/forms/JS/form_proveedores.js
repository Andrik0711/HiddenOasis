
function subir() {
    var formulario = [];
    var id = document.form1.id.value;
    var nombre = document.form1.nombre.value;
    var apellidoMaterno = document.form1.apellidoMaterno.value;
    var apellidoPaterno = document.form1.apellidoPaterno.value;
    var email = document.form1.email.value;
    var telefono = document.form1.telefono.value;
    var direccion = document.form1.direccion.value;
    var RFC = document.form1.RFC.value;
    var categoria = document.form1.categoria.value;


    if (id == "" || nombre == "" || apellidoMaterno == "" || apellidoPaterno == "" || telefono == "" || direccion == "" || RFC == "" || categoria == "") {
        document.getElementById('text').value = ('Los campos con * son obligatorios');
        return false;
    }

    if (email == "") {
        document.getElementById('text').value = ('Email no valido');;
    }

    formulario = ["id: " + id + "\nNombre:" + nombre + "\nApellido Materno: " + apellidoMaterno + "\nApellido Paterno: " + apellidoPaterno + "\nEmail: " + email + "\nTelefono: " + telefono + "\nRFC: " + RFC + "\nCategoria: " + categoria];

    console.log(formulario)
    document.getElementById('text').value = formulario;
}

function reset() {
    document.getElementById('text').value = ('Los campos con * son obligatorios');
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellidoMaterno").value = "";
    document.getElementById("apellidoPaterno").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("RFC").value = "";
    document.getElementById("categoria").value = "";

}