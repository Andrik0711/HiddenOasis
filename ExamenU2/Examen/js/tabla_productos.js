/**
  * Crea una tabla con la información de los productos.
  * La sección del producto que desea mostrar.
  */
const products = [
    {
        usuario: 'Andrik',
        date: '5 días',
        name: 'Balon de futbol blanco con negro',
        key: 1,
        price: 199,
        description: 'Balon de futbol edicion normal, para uso en campos profesionales.'
    },
    {
        usuario: 'Yanel',
        date: '3 Días',
        name: 'Balon de futbol Mundial Qatar 2022',
        key: 2,
        price: 200,
        description: 'Balon de futbol edicion especial Qatar 2022'
    },
    {
        usuario: 'Jorge',
        date: '6 Días',
        name: 'Tachon nike mercurial edicion retro',
        section: 'Tachones',
        price: 199,
        key: 3,
        imgPath: '/Examen/js/images/tachones1.jpg',
        description: 'Tachon nike mercurial color salmon edicion profesional'
    },
    {
        usuario: 'Cesar',
        date: '2 Días',
        name: 'Tachon puma edicion retro',
        section: 'Tachones',
        price: 200,
        key: 4,
        imgPath: '/Examen/js/images/tachones2.jpg',
        description: 'Tachon puma edicion retro, color amarillo excelente para campos profesionales'
    },
    {
        usuario: 'Lilian',
        date: '7 Días',
        name: 'Playera Chivas edicion Local ',
        section: 'Playeras',
        price: 150,
        key: 5,
        imgPath: '/Examen/js/images/playera1.jpg',
        description: 'Playera Edicion Local 2019'
    },
    {
        usuario: 'Cesar',
        date: '10 Días',
        name: 'Playera Chivas edicion especial 2022',
        section: 'Playeras',
        price: 200,
        key: 6,
        imgPath: '/Examen/js/images/playera2.jpg',
        description: 'Playera edicion especial para el apertura 2022'
    },
    {
        usuario: 'Christopher',
        date: '5 Días',
        name: 'Short Chivas visitante',
        section: 'Shorts',
        price: 150,
        key: 7,
        imgPath: '/Examen/js/images/short1.jpg',
        description: 'Short Chivas Vistante edicion 2020'
    },
    {
        usuario: 'Jonathan',
        date: '4 Días',
        name: 'Short Chivas Local',
        section: 'Shorts',
        price: 200,
        key: 8,
        imgPath: '/Examen/js/images/short2.jpg',
        description: 'Short Chivas Local edicion 2022'
    },
    {
        usuario: 'Kency',
        date: '1 Días',
        name: 'Espinillera Messi',
        section: 'Espinilleras',
        price: 150,
        key: 9,
        imgPath: '/Examen/js/images/espinilleras1.jpg',
        description: 'Espinillera Edicion Messi color verde'
    },
    {
        usuario: 'Osiel',
        date: '10 Días',
        name: 'Espinillera adidas',
        section: 'Espinilleras',
        price: 200,
        key: 10,
        imgPath: '/Examen/js/images/espinilleras2.jpg',
        description: 'Espinillera adidad verde con azul'
    },
];


/**
* Toma la matriz de productos y crea una tabla con los datos que contiene.
 */
function verTabla() {
    const divProducts = document.querySelector('#divTableDictionary');

    let divContent = `<div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Tabla de productos    </h3>

          <div class="card-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
          </div>
        </div>
        <div class="card-body table-responsive p-0">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>key</th>
                <th>Usuario</th>
                <th>Nombre del producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Fecha de entrega</th>
              </tr>
            </thead>
            <tbody>`;

    for (let i = 0; i < products.length; i++) {
        divContent = divContent + `

        <tr>
        <td>${products[i].key}</td>
        <td>${products[i].usuario}</td>
        <td>${products[i].name}</td>
        <td>${products[i].description}</td>
        <td>$${products[i].price}</td>
        <td>${products[i].date}</td>
        </tr>`

    }

    divContent = divContent + `
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>`

    divProducts.innerHTML = divContent;

}