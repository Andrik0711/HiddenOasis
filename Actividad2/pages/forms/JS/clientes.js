const clientes = [
    {
        id: 1,
        nombre: 'Juan',
        ApellidoMCell: 'López',
        ApellidoPCell: 'García',
        EmailCell: 'juanlopez@gmail.com',
        TelefonoCell: '5544332211',
        DireccionCell: 'Calle 10 #123, Col. Centro, CDMX',
        RFCCell: 'LOPG880923123',
        CategoriaCell: 'Platino',
    },
    {
        id: 2,
        nombre: 'María',
        ApellidoMCell: 'Martínez',
        ApellidoPCell: 'Hernández',
        EmailCell: 'mariamartinez@hotmail.com',
        TelefonoCell: '5555555555',
        DireccionCell: 'Avenida 15 #456, Col. Roma, CDMX',
        RFCCell: 'MAHE780416567',
        CategoriaCell: 'Oro',
    },
    {
        id: 3,
        nombre: 'Pedro',
        ApellidoMCell: 'González',
        ApellidoPCell: 'Vázquez',
        EmailCell: 'pedrogonzalez@gmail.com',
        TelefonoCell: '5577889900',
        DireccionCell: 'Calle 20 #789, Col. Juárez, CDMX',
        RFCCell: 'GOVP900223678',
        CategoriaCell: 'Plata',
    },
    {
        id: 4,
        nombre: 'Ana',
        ApellidoMCell: 'García',
        ApellidoPCell: 'López',
        EmailCell: 'anagarcia@hotmail.com',
        TelefonoCell: '5566778899',
        DireccionCell: 'Calle 5 #321, Col. Condesa, CDMX',
        RFCCell: 'GALA831201345',
        CategoriaCell: 'Oro',
    },
    {
        id: 5,
        nombre: 'Carlos',
        ApellidoMCell: 'Pérez',
        ApellidoPCell: 'Sánchez',
        EmailCell: 'carlosperez@gmail.com',
        TelefonoCell: '5511223344',
        DireccionCell: 'Avenida 25 #890, Col. Del Valle, CDMX',
        RFCCell: 'PESC860214234',
        CategoriaCell: 'Plata',
    },
    {
        id: 6,
        nombre: 'Luis',
        ApellidoMCell: 'Hernández',
        ApellidoPCell: 'González',
        EmailCell: 'luishernandez@hotmail.com',
        TelefonoCell: '5588990011',
        DireccionCell: 'Calle 15 #555, Col. Narvarte, CDMX',
        RFCCell: 'HEGL771005123',
        CategoriaCell: 'Platino',
    },
    {
        id: 7,
        nombre: 'Karen',
        ApellidoMCell: 'Torres',
        ApellidoPCell: 'García',
        EmailCell: 'karentorres@gmail.com',
        TelefonoCell: '5533445566',
        DireccionCell: 'Avenida 30 #345, Col. Polanco, CDMX',
        RFCCell: 'TOGK900615234',
        CategoriaCell: 'Oro',
    }
];


// Agregar los datos de cada producto a la tabla
const clientesTable = document.getElementById('clientes');
clientes.forEach((clientes) => {
    const row = clientesTable.insertRow(-1);
    const idCell = row.insertCell(0);
    const nombreCell = row.insertCell(1);
    const ApellidoMCell = row.insertCell(2);
    const ApellidoPCell = row.insertCell(3);
    const EmailCell = row.insertCell(4);
    const TelefonoCell = row.insertCell(5);
    const DireccionCell = row.insertCell(6);
    const RFCCell = row.insertCell(7);
    const CategoriaCell = row.insertCell(8);
    idCell.textContent = clientes.id;
    nombreCell.textContent = clientes.nombre;
    ApellidoMCell.textContent = clientes.ApellidoMCell;
    //Con esa linea se agrega tipos numericos
    // ApellidoPCell.textContent = `$${clientes.precio}`;
    ApellidoPCell.textContent = clientes.ApellidoPCell;
    EmailCell.textContent = clientes.EmailCell;
    TelefonoCell.textContent = clientes.TelefonoCell;
    DireccionCell.textContent = clientes.DireccionCell;
    RFCCell.textContent = clientes.RFCCell;
    CategoriaCell.textContent = clientes.CategoriaCell;
});