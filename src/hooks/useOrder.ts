import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    const addItem =(item: MenuItem) =>{
        const itemInOrderExist = order.findIndex(itemState => itemState.id === item.id)
        if(itemInOrderExist >= 0){
            const updatedOrder = order.map(itemState=> {
                if(itemState.id ===item.id){

                    return{
                        ...itemState,
                        quantity: itemState.quantity + 1
                    }
                }
                return itemState

            })
            setOrder(updatedOrder)



           /*   const updatedOrder = [...order]

           updatedOrder[itemInOrderExist].quantity++
            setOrder(updatedOrder) */

        }else{
            const newItem: OrderItem = { ...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeFromOrder = (platillo: OrderItem)=>{
        const updatedOrder = order.filter(item => item.id!== platillo.id)
        setOrder(updatedOrder)
    }

    const placeOrder = ()=>{
        setOrder([])
        setTip(0)
    }
  return {
    addItem,
    tip,
    setTip,
    order,
    removeFromOrder,
    placeOrder

  }

}
