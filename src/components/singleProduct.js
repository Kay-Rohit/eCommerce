import React from 'react';
import '../App.css';
import Button from '../components/form/button';
import {Link} from 'react-router-dom';

const Product = ({
    documentID,
    thumb,
    name,
    Price
}) => {

    if(!thumb || !name || typeof Price === 'undefined') return null;

    const configAddToCart = {
        type: 'button'
    };

    return (
        <div className="product">
            <div className="thumb">
                <Link to={`/product/${documentID}`} >
                    <img src={thumb} alt="thumbnail" />
                </Link>
            </div>
            <div class="details">
                <ul>
                    <li>
                    <Link to={`/product/${documentID}`} >
                        <span className="name">{name}</span>
                    </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="price">Rs. {Price}</span>
                    </li>
                    <li>
                        <div className="addToCart">
                        <Button {...configAddToCart}>
                            ADD TO CART
                        </Button>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Product;
