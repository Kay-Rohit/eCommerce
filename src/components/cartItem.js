import React from 'react';
import {useDispatch} from 'react-redux';
import {removecartItem, addProduct, reduceCartItem} from '../redux/cart/cart.actions';

const CartItem = (product) => {

    const dispatch = useDispatch();

    const {
        thumb,
        name,
        Price,
        quantity,
        documentID
    } = product;

    const handleremoveCartItem = (documentID) => {
        dispatch(
            removecartItem({
                documentID
            })
        );
    };

    const handleAddProduct = (product) => {
        dispatch(
            addProduct(product)
        );
    };

    const handleReduceItem = (product) => {
        dispatch(
            reduceCartItem(product)
        );
    }

    return (
        <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
            <tbody>
                <tr>
                    <td>
                        <img src={thumb} alt={name} />
                    </td>
                    <td>
                        {name}
                    </td>
                    <td>
                        <span className="removeBtn" onClick={() => handleReduceItem(product)}> - </span>
                        <span>{quantity}</span>
                        <span className="removeBtn" onClick={() => handleAddProduct(product)}> + </span>
                    </td>
                    <td>
                       Rs. {Price}
                    </td>
                    <td align="center">
                        <span className="removeBtn" onClick={() => handleremoveCartItem(documentID)}>X</span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartItem;