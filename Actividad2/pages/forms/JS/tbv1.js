const productos = [
    {
        id: 1,
        nombre: 'Laptop HP',
        descripcion: 'Laptop con pantalla de 15 pulgadas, procesador Intel Core i5, 8GB de RAM y 256GB de almacenamiento SSD.',
        precio: 12000,
        stock: 5
    },
    {
        id: 2,
        nombre: 'Smartphone Samsung Galaxy',
        descripcion: 'Smartphone con pantalla OLED de 6.2 pulgadas, procesador Qualcomm Snapdragon 845, 6GB de RAM y 128GB de almacenamiento.',
        precio: 8000,
        stock: 10
    },
    {
        id: 3,
        nombre: 'Tablet Apple iPad',
        descripcion: 'Tablet con pantalla de 10.5 pulgadas, procesador Apple A10X Fusion, 4GB de RAM y 64GB de almacenamiento.',
        precio: 10000,
        stock: 3
    }
    // Agregar más objetos para cada producto
];

// Agregar los datos de cada producto a la tabla
const productosTable = document.getElementById('productos');
productos.forEach((producto) => {
    const row = productosTable.insertRow(-1);
    const idCell = row.insertCell(0);
    const nombreCell = row.insertCell(1);
    const descripcionCell = row.insertCell(2);
    const precioCell = row.insertCell(3);
    const stockCell = row.insertCell(4);
    idCell.textContent = producto.id;
    nombreCell.textContent = producto.nombre;
    descripcionCell.textContent = producto.descripcion;
    precioCell.textContent = `$${producto.precio}`;
    stockCell.textContent = producto.stock;
});