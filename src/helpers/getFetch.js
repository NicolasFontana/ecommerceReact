const stockProductos = [
  { id: 1, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 AMP Edition', cant: 0, precio: 110000, imagen: 'Zotac1660S.jpg' },
  { id: 2, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan', cant: 2, precio: 84000, imagen: 'Zotac1660.jpg' },
  { id: 3, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 12GB GDDR6 Twin Fan', cant: 10, precio: 120000, imagen: 'ZotacRTX2060.jpg' },
  { id: 4, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 6GB GDDR6 Black', cant: 8, precio: 130000, imagen: 'ZotacRTX2060Black.jpg' },
  { id: 5, categoria: 'fuente', nombre: 'Fuente Cooler Master MWE V2 750W 80 Plus Bronze', cant: 13, precio: 16500, imagen: 'FuenteCoolerMaster750W.jpg' },
  { id: 6, categoria: 'fuente', nombre: 'Fuente Aerocool Cylon 700W Full Range RGB 80 Plus Bronze', cant: 3, precio: 9400, imagen: 'FuenteAerocool700W.jpg' }
]

export const gFetch = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(stockProductos)
    }, 2000);
  } else {
    reject('404 - not found')
  }
})

const producto = { id: 1, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 AMP Edition', cant: 0, precio: '$110.000', imagen: 'Zotac1660S.jpg' }

export const getFetchOne = new Promise((resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(stockProductos)
    }, 2000);
  } else {
    reject('400 - not found')
  }
})
