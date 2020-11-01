import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductStart} from '../redux/product/product.actions';

import Product from './singleProduct';

const mapState = ({productsData}) => ({
    products: productsData.products
})

const ProductResults = ({}) => {
    const dispatch = useDispatch();
    const {products} = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchProductStart()
        )
    }, []);

    if (!Array.isArray(products)) return null;

    if(products.length < 1) {
        return(
            <div>
                <p>No Search Results</p>
            </div>
        )
    }

    return (
        <div className="products">
            <h2 style={{marginBottom:'5%'}}>
                Brows Products
            </h2>
            {products.map((product, pos) => {
                const {thumb, name, Price} = product;

                if(!thumb || !name || typeof Price === 'undefined') return null;

                const configProduct = {
                    ...product,
                    pos
                };

                return(
                    <Product {...configProduct}/>
                );
            })}
        </div>
    )
}

export default ProductResults;
