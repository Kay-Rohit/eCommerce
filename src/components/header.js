import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/utils';

import {useSelector} from 'react-redux';

import {selectcartItemsCount} from '../redux/cart/cart.selectors';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalCartItems: selectcartItemsCount(state)
});

const Header = props => {

    const {currentUser, totalCartItems} = useSelector(mapState);

    return (
        <div className="header">
            <div>
                <Link to="/">Header</Link>
            </div>
            <div>
                <Link to="/items">Shop</Link>
            </div>
            <div className="callToActions">
                {!currentUser && (
                    <div>
                        <ul>
                            <li>
                                <Link to="/signin">SignIn</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/cart" >Cart <br />(Sign in to add to cart)</Link>
                            </li>
                        </ul>
                    </div>
                )}
                <ul>
                    {currentUser && (
                    <>
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()} >Logout</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/cart" >Cart ({totalCartItems})</Link>
                            </li>
                        </ul>
                    </>
                )}
                </ul>
            </div>
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;
