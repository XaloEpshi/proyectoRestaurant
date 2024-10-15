import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrde = () => {

  const {getTotalCartAmount} = useContext(StoreContext)



  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informacion del envio</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
        </div>
        <input type="email" placeholder="Coreo Electronico" />
        <input type="text" placeholder="Direccion" />
        <div className="multi-fields">
          <input type="text" placeholder="Ciudad" />
          <input type="text" placeholder="Region" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Codigo de Ciudad" />
          <input type="text" placeholder="Pais" />
        </div>
        <input type="text" placeholder="Telefono" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Costo Delivery</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrde;
