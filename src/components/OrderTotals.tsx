import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {
    const subtotalAmount = useMemo(()=> order.reduce((total, item)=> total + item.price * item.quantity, 0), [order])
    const tipAmount = useMemo(()=> subtotalAmount * tip , [subtotalAmount, tip])

  return (
    <>
      <div>
        <h2 className=" font-black text-2xl"> Totales y Propina:</h2>
        <p>Subtotal a pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>Propina: {''}
            <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>Total a pagar: {''}
            <span className="font-bold">{formatCurrency (subtotalAmount + tipAmount)}</span>
        </p>
      </div>
      <button
        className=" w-full bg-black p-3 uppercasse disabled:opacity-10 text-white font-bold mt-10"
        disabled={(subtotalAmount + tipAmount)===0}
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>
    </>
  )
}
