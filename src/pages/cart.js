import React from 'react';
import {useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../redux/cart/cart.selectors';
import {useHistory} from 'react-router-dom';

import Button from '../components/form/button';
import CartItem from '../components/cartItem';

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const Cart = () =>  {

    const {cartItems, total} = useSelector(mapState);
    const history = useHistory();
    return (
        <>
        <div>
            Your Cart
        </div>
        <div className="cart">
            {cartItems.length > 0 ? (
                <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>

                    <tr>
                        {/*<table className="cartHeader" border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                            <tr>
                                <th>    
                                    Product
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Remove
                                </th>
                            </tr>
                            </tbody>
    </table>*/}
                    </tr>
                    <tr>
                        <table border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                {cartItems.map((item, pos) => {
                                    return(
                                        <tr key={pos}>
                                            <td>
                                                <CartItem {...item}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </tr>
                    <tr>
                        <table align="right" border="0" cellPadding="10" cellSpacing="0">
                                <tr align="right">
                                    <td>
                                        <h3>
                                            Total: Rs. {total}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <table border="0" cellPadding="10" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Button onClick={() => history.goBack()}>
                                                        Continue Shopping
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tr>
                        </table>
                    </tr>
                </tbody>
            </table>
            ) : (
                <p>No items in your cart</p>
            )}
        </div>
        </>
    )
}

export default Cart;
