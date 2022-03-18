const stockProductos = [
  {id: 1, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 AMP Edition', stock: 0, precio: '$110.000', imagen: 'Zotac1660S.jpg'},
  {id: 2, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan', stock: 2, precio: '$84.000', imagen: 'Zotac1660.jpg'},
  {id: 3, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 12GB GDDR6 Twin Fan', stock: 10, precio: '$120.000', imagen: 'ZotacRTX2060.jpg'},
  {id: 4, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 6GB GDDR6 Black', stock: 8, precio: '$130.000', imagen: 'ZotacRTX2060Black.jpg'}
]

export const gFetch = new Promise ( (resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(stockProductos)
    }, 3000);
  } else {
    reject ('404 - not found')
  }
})