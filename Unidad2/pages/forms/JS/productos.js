
function subir() {
    var formulario = "";
    var code = document.form.code.value;
    var name = document.form.name.value;
    var category = document.form.category.value;
    var pricesale = document.form.pricesale.value;
    var pricebuy = document.form.pricebuy.value;



    if (code == "") {
        document.getElementById('text').value = ('Codigo no valido');
        return false;
    }
    if (name == "") {
        document.getElementById('text').value = ('Nombre no valido');
        return false;
    }
    if (category == "") {
        document.getElementById('text').value = ('Categoria no valida');
        return false;
    }
    if (pricebuy == "") {
        document.getElementById('number').num;
        return false;
    }
    if (pricesale == "") {
        document.getElementById('number').num;
        return false;
    }


    formulario = ' Codigo: ' + code + ', Nombre: ' + name + ', Categoria:' + category + ', Precio de compra: ' + pricebuy + ', Precio de venta: ' + pricesale;
    document.getElementById('text').value = formulario;

    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("precio de venta").value = "";
    document.getElementById("pricesale").num = 0;
    document.getElementById("pricebuy").num = 0;
}
