import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProdStart, setProd} from '../redux/product/product.actions';
import Button from '../components/form/button';

const mapState = state => ({
    product: state.productsData.product
});

const ProductCard = ({}) =>  {
    const dispatch = useDispatch();
    const {productID} = useParams();
    const {product} = useSelector(mapState);

    const{
        name,
        thumb,
        Price,
        desc
    } = product;

    useEffect(() => {
        dispatch(
            fetchProdStart(productID)
        )

        return () => {
            dispatch(
                setProd({})
            )
        }

    }, []);

    const configAddToCartBtn = {
        type: 'button'
    }

    return (
        <div className="productCard">
            <div className="image">
        <img src={thumb} alt="product image" />
            </div>
            <div className="productDetails">
                <ul>
                    <l1>
                        <h1>
                            {name}
                        </h1>
                    </l1>
                    <li>
                        <span>Rs. {Price}</span>
                    </li>
                    <li>
                        <div className="addToCartIn">
                            <Button {...configAddToCartBtn}>ADD TO CART</Button>
                        </div>
                    </li>
                    <li>
                        <span>
                            {desc}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductCard;
