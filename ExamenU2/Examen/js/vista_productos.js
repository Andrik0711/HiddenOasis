/**
  * Crea una tabla con la información de los productos.
  * La sección del producto que desea mostrar.
  */
const products = [
    {
        name: 'Balon de futbol blanco con negro',
        key: 1,
        section: 'Balones',
        price: 199,
        imgPath: '/Examen/js/images/balon1.png',
        description: 'Balon de futbol edicion normal, para uso en campos profesionales.'
    },
    {
        name: 'Balon de futbol Mundial Qatar 2022',
        section: 'Balones',
        price: 200,
        key: 2,
        imgPath: '/Examen/js/images/balon2.jpg',
        description: 'Balon de futbol edicion especial Qatar 2022'
    },
    {
        name: 'Tachon nike mercurial edicion retro',
        section: 'Tachones',
        price: 199,
        key: 3,
        imgPath: '/Examen/js/images/tachones1.jpg',
        description: 'Tachon nike mercurial color salmon edicion profesional'
    },
    {
        name: 'Tachon puma edicion retro',
        section: 'Tachones',
        price: 200,
        key: 4,
        imgPath: '/Examen/js/images/tachones2.jpg',
        description: 'Tachon puma edicion retro, color amarillo excelente para campos profesionales'
    },
    {
        name: 'Playera Chivas edicion Local ',
        section: 'Playeras',
        price: 150,
        key: 5,
        imgPath: '/Examen/js/images/playera1.jpg',
        description: 'Playera Edicion Local 2019'
    },
    {
        name: 'Playera Chivas edicion especial 2022',
        section: 'Playeras',
        price: 200,
        key: 6,
        imgPath: '/Examen/js/images/playera2.jpg',
        description: 'Playera edicion especial para el apertura 2022'
    },
    {
        name: 'Short Chivas visitante',
        section: 'Shorts',
        price: 150,
        key: 7,
        imgPath: '/Examen/js/images/short1.jpg',
        description: 'Short Chivas Vistante edicion 2020'
    },
    {
        name: 'Short Chivas Local',
        section: 'Shorts',
        price: 200,
        key: 8,
        imgPath: '/Examen/js/images/short2.jpg',
        description: 'Short Chivas Local edicion 2022'
    },
    {
        name: 'Espinillera Messi',
        section: 'Espinilleras',
        price: 150,
        key: 9,
        imgPath: '/Examen/js/images/espinilleras1.jpg',
        description: 'Espinillera Edicion Messi color verde'
    },
    {
        name: 'Espinillera adidas',
        section: 'Espinilleras',
        price: 200,
        key: 10,
        imgPath: '/Examen/js/images/espinilleras2.jpg',
        description: 'Espinillera adidad verde con azul'
    },
];

/**
  * Toma una sección como parámetro, y luego recorre la matriz de productos y crea un div
  * por cada producto que coincida con la sección.
  */
function verProductos(section) {

    const divProducts = document.querySelector('#divProductsContent');

    let divContent = ``;

    if (section == 'Todos') {
        for (let i = 0; i < products.length; i++) {
            divContent = divContent + `
            <div class="divProductContent">
            <img src="${products[i].imgPath}">
            <h3>${products[i].name}</h3>
            <p>$${products[i].price}</p>
            <p>${products[i].description}</p>
            </div>`
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            if (products[i].section == section) {
                divContent = divContent + `
                <div class="divProductContent">
                <img src="${products[i].imgPath}">
                <h3>${products[i].name}</h3>
                <p>$${products[i].price}</p>
                <p>${products[i].description}</p>
                </div>`
            }
        }
    }

    divProducts.innerHTML = divContent;

}

