import React, {useEffect} from 'react';
import {fetchCartItemStart, deleteCartItemsStart} from '../redux/myCart/myCart.actions';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'reactstrap';

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
            <h2><b>Manage cart</b></h2>
            <Table striped>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                {cartItems.length > 0 ? (
                    <tbody>
                        {cartItems.map((cartItem, index) => {
                                const {
                                    name, 
                                    Price,
                                    thumb
                                } = cartItem;
                                return(
                                    <tr key={index}>
                                        <th scope="row" className="thumb"><img src={thumb} alt={name} /></th>
                                        <td>{name}</td>
                                        <td>{Price}</td>
                                        <td>
                                            <Button onClick={() => dispatch(deleteCartItemsStart(name))}>
                                                REMOVE
                                            </Button>
                                        </td>
                                    </tr>
                                );
                        })}
                    </tbody>
                ) : (
                    <h2>OOPS !! Nothing to show in cart.</h2>
                )}
            </Table>
        </div>
    );
}

export default MyyCart;
