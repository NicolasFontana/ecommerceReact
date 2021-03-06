import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
  ({ prods }) => {
    return (
      <>
        {prods.map((prod) => <Item key={prod.id} prod={prod} />)}
      </>
    )
  }
)

export default ItemList