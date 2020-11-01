import React, {useEffect} from 'react';
import {fetchCartItemStart, deleteCartItemsStart} from '../redux/myCart/myCart.actions';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../components/form/button';

const mapState = ({myCartData}) => ({
    cartItems: myCartData.cartItems
});

const MyyCart = () => {
    const {cartItems} = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchCartItemStart()
        );

    }, []);

    console.log("My cart Items", cartItems);

    return (
        <div className="myCart">

            <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <th>
                            <h1>
                                Manage Cart
                            </h1>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {cartItems.length > 0 ? (<table border="0" cellPadding="10" cellSpacing="0">
                                <tbody>
                                    {cartItems.map((cartItem, index) => {
                                        const {
                                            name, 
                                            Price,
                                            thumb
                                        } = cartItem;
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <img className="thumb" src={thumb} alt={name} />
                                                </td>
                                                <td>
                                                    {name}
                                                </td>
                                                <td>
                                                    Rs. {Price}
                                                </td>
                                                <td>
                                                    <Button onClick={() => dispatch(deleteCartItemsStart(name))}>
                                                        REMOVE
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>) : (
                                <p>No items in your cart</p>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default MyyCart;
