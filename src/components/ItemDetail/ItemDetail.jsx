import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './itemDetail.css'


function ItemDetail({ producto }) {
		const [isCant, setIsCant] = useState(false)
    const {addItem} = useCartContext()
    
    const onAdd= (cant) => {
				addItem( { ...producto, cant: cant } )
        setIsCant(true)
    }

	return (
		<>
		<div className="containerDetail container-fluid col-10">
			<div className="d-flex justify-content-around mt-5">
				<div className="me-5">
					<img src={producto.imagen} alt="" />
				</div>
				<div>
					<p className="fs-2">{producto.nombre}</p>
					<p className="fs-2 mb-5 text-primary">${producto.precio}</p>
					
					{isCant ?
						<>  
							<Link to='/'>
								<button className='btn btn-outline-primary me-3'>Seguir comprando</button>
							</Link>
							<Link to='/cart'>
								<button className='btn btn-outline-success'>Ir al carrito</button>
							</Link>
						</>
					:
						<ItemCount initial={1} cant={producto.cant} onAdd={onAdd}></ItemCount>
					}
				</div>
			</div>
		</div>
		</>
	);
}

export default ItemDetail;
