const cat_clientes = [
    {
        id: 1,
        nombre: 'Karen'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Sofía'
    },
    {
        id: 4,
        nombre: 'Luis'
    },
    {
        id: 5,
        nombre: 'Ana'
    },
    {
        id: 6,
        nombre: 'Diego'
    },
    {
        id: 7,
        nombre: 'Lucía'
    },
    {
        id: 8,
        nombre: 'Carlos'
    },
    {
        id: 9,
        nombre: 'Marta'
    },
    {
        id: 10,
        nombre: 'Pedro'
    }
];



// Agregar los datos de cada producto a la tabla
const cat_clientesTable = document.getElementById('cat_clientes');
cat_clientes.forEach((cat_clientes) => {
    const row = cat_clientesTable.insertRow(-1);
    const idCell = row.insertCell(0);
    const nombreCell = row.insertCell(1);
    idCell.textContent = cat_clientes.id;
    nombreCell.textContent = cat_clientes.nombre;
});