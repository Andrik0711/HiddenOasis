
function subir() {
    var formulario = "";
    var key = document.form.key.value;
    var name = document.form.name.value;


    if (key == "") {
        document.getElementById('text').value = ('Codigo no valido');
        return false;
    }
    if (name == "") {
        document.getElementById('text').value = ('Nombre no valido');
        return false;
    }

    document.getElementById("key").value = "";
    document.getElementById("name").value = "";
    formulario = ' Codigo: ' + key + ', Nombre: ' + name;
    document.getElementById('text').value = formulario;



}
