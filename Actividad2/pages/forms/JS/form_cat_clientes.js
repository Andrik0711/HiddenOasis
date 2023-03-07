
function subir() {
    var formulario = [];
    var id = document.form1.id.value;
    var nombre = document.form1.nombre.value;



    if (id == "" || nombre == "") {
        document.getElementById('text').value = ('Los campos con * son obligatorios');
        return false;
    }

    formulario = ["id: " + id + "\nNombre: " + nombre];

    console.log(formulario)
    document.getElementById('text').value = formulario;
}

function reset() {
    document.getElementById('text').value = ('Los campos con * son obligatorios');
    document.getElementById("id").value = "";
    document.getElementById("nombre").value = "";

}