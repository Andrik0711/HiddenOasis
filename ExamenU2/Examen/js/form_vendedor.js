function cerrarModalError() {
    //Cerrar el modal de error
    document.getElementsByClassName("fondo_transparenteError")[0].style.display = "none";
}

function cerrarModal() {
    //Al presionar el boton de aceptar, se cerrara el modal
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
}

function pedirProducto() {
    //Obtener los valores de los inputs del form
    let id = document.querySelector('#productID').value;
    let nombre = document.querySelector('#productName').value;
    let descripcion = document.querySelector('#productDesc').value;
    let precio = document.querySelector('#productPrice').value;
    let fecha = document.querySelector('#productDate').value;
    let notes = document.querySelector('#productNotes').value;


    //Validar si estan llenos los campos
    if (id != '' && nombre != '' && descripcion != '' && precio != '' && fecha != '' && notes != '') {
        let contenido = document.querySelector('#content-modal');
        //Agregando los valores al modal
        contenido.innerHTML = `
        <p>id: ${id}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Precio: $${precio}</p>
        <p>Fecha: ${fecha}</p>
        <p>Notas: ${notes}</p>
        `;

        document.getElementsByClassName("fondo_transparente")[0].style.display = "block";
    } else {
        //Mostrar error en caso de que no esten llenos los campos
        document.getElementsByClassName("fondo_transparenteError")[0].style.display = "block";
    }
}