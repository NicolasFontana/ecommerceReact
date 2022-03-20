function ItemDetail({producto}) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="d-flex justify-content-center col-12">
        <img src={require(`../../img/${producto.imagen}`)} alt="" />
      </div>
        <p>{producto.nombre}</p>
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
      </div>
  )
}

export default ItemDetail