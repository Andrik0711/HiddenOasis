const proveedores = [
    {
        id: 1,
        nombre: 'Juan',
        ApellidoMCell: 'Pérez',
        ApellidoPCell: 'González',
        EmailCell: 'juan.perez@mail.com'
    },
    {
        id: 2,
        nombre: 'María',
        ApellidoMCell: 'García',
        ApellidoPCell: 'Hernández',
        EmailCell: 'maria.garcia@mail.com'
    },
    {
        id: 3,
        nombre: 'Pedro',
        ApellidoMCell: 'Sánchez',
        ApellidoPCell: 'López',
        EmailCell: 'pedro.sanchez@mail.com'
    },
    {
        id: 4,
        nombre: 'Luis',
        ApellidoMCell: 'Hernández',
        ApellidoPCell: 'Gutiérrez',
        EmailCell: 'luis.hernandez@mail.com'
    },
    {
        id: 5,
        nombre: 'Ana',
        ApellidoMCell: 'Mendoza',
        ApellidoPCell: 'Flores',
        EmailCell: 'ana.mendoza@mail.com'
    },
    {
        id: 6,
        nombre: 'Miguel',
        ApellidoMCell: 'González',
        ApellidoPCell: 'Martínez',
        EmailCell: 'miguel.gonzalez@mail.com'
    },
    {
        id: 7,
        nombre: 'Lucía',
        ApellidoMCell: 'Díaz',
        ApellidoPCell: 'Ramírez',
        EmailCell: 'lucia.diaz@mail.com'
    },
    {
        id: 8,
        nombre: 'Carlos',
        ApellidoMCell: 'García',
        ApellidoPCell: 'Jiménez',
        EmailCell: 'carlos.garcia@mail.com'
    },
    {
        id: 9,
        nombre: 'Sofía',
        ApellidoMCell: 'Martínez',
        ApellidoPCell: 'Sánchez',
        EmailCell: 'sofia.martinez@mail.com'
    },
    {
        id: 10,
        nombre: 'Javier',
        ApellidoMCell: 'Flores',
        ApellidoPCell: 'Díaz',
        EmailCell: 'javier.flores@mail.com'
    },
    {
        id: 11,
        nombre: 'Karen',
        ApellidoMCell: 'López',
        ApellidoPCell: 'González',
        EmailCell: 'karen.lopez@mail.com'
    }
];


// Agregar los datos de cada producto a la tabla
const proveedoresTable = document.getElementById('proveedores');
proveedores.forEach((proveedores) => {
    const row = proveedoresTable.insertRow(-1);
    const idCell = row.insertCell(0);
    const nombreCell = row.insertCell(1);
    const ApellidoMCell = row.insertCell(2);
    const ApellidoPCell = row.insertCell(3);
    const EmailCell = row.insertCell(4);
    idCell.textContent = proveedores.id;
    nombreCell.textContent = proveedores.nombre;
    ApellidoMCell.textContent = proveedores.ApellidoMCell;
    //Con esa linea se agrega tipos numericos
    // ApellidoPCell.textContent = `$${proveedores.precio}`;
    ApellidoPCell.textContent = proveedores.ApellidoPCell;
    EmailCell.textContent = proveedores.EmailCell;
});