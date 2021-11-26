import React from 'react';

export function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const taxPrice = Math.round(itemsPrice * 0.14);
    const shippingPrice = itemsPrice > 100 ? 0 : 5;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;


    return (
        <div className="block pricerow">
            <h2> Total Price </h2>
            <div>
                {cartItems.map((product) => (
                    <div className="cartrow" key={product.id}>
                        <div className="column-left">
                            {product.name}
                        </div>
                     
                         <div className="column-center"><button onClick={() => onAdd(product)}>+</button>
                            <button onClick={() => onRemove(product)}>-</button> 
                            </div>
                         
                          <div className="column-right">$ {product.quantity} * {product.price} </div>
                          </div>
                      
             
                ))
                }
            </div>
            <hr />
            {cartItems.length === 0 && <div>ShoppingCart is currently empty</div>}
            {cartItems.length > 0 && (
                <>
                    <div className="cartrow" >
                        <div className="column-left">Items Price</div>
                        <div className="column-center"></div>
                        <div className="column-right">$ {itemsPrice}</div>
                    </div>
                    <div className="cartrow" >
                        <div className="column-left">Tax Price</div>
                        <div className="column-center"></div>
                        <div className="column-right">$ {taxPrice}</div>
                    </div>
                    <div className="cartrow" >
                        <div className="column-left">Shipping Price</div>
                        <div className="column-center"></div>
                        <div className="column-right">$ {shippingPrice}</div>
                    </div>
                    <div className="cartrow" >
                        <strong className="column-left">Total Price</strong>
                        <div className="column-center"></div>
                        <strong className="column-right">$ {totalPrice}</strong>
                    </div>
                    <hr />
                    <button onClick={() => alert("Implement Checkout!")}>CheckOut</button>
                </>)}
        </div>
    );
}