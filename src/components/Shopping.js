import React from 'react';

export function Shopping(props) {
    const { products, onAdd } = props;
    return (
        <div className="block">
        <h2>Shopping Products</h2>
        <div className="products">
        { products.map((product) => (
            <div className="productbox" key={product.id}>
                <br/>
                <img className='image' src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <button onClick={()=>onAdd(product)}>Add to cart</button>
        </div>
            ))
        }
        </div>
</div>
    );
}