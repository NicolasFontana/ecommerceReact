import ItemCount from "../ItemCount/ItemCount";

const onAdd = (count) => {
	console.log(count);
};

function ItemDetail({ producto }) {
	return (
		<div className="container-fluid col-10">
			<div className="d-flex justify-content-around mt-5">
				<div className="me-5">
					<img src={require(`../../img/${producto.imagen}`)} alt="" />
				</div>
				<div>
					<p className="fs-2">{producto.nombre}</p>
					<p className="fs-2 mb-5 text-primary">{producto.precio}</p>
					<ItemCount initial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>
				</div>
			</div>
		</div>
	);
}

export default ItemDetail;
