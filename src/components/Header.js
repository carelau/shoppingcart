import React from 'react';

export function Header (props) {
    return (
<div className="block row">
    <h2>Small Shopping Cart</h2>
    <h3>Cart <button>{props.numCartItems}</button> </h3>
</div>
    );
}