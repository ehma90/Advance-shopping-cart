import { Stack } from 'react-bootstrap'
import storeItem from '../data/items.json'
type CartItemProps ={
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
        const item = storeItem.find(i => i.id === id)
        if(item == null) return null
    return (
        <Stack>
        
        </Stack>
    )
}