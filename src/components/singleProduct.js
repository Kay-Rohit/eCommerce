import React from 'react';

const Product = ({
    name,
    Price
}) => {

    if(!name || typeof Price === 'undefined') return null;

    return (
        <div className="product">
            <div className="thumb">

            </div>
            <div class="details">
                <ul>
                    <li>
                        <span>{name}</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>{Price}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Product;
