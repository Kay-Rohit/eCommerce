import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/utils';

import {useSelector} from 'react-redux';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

const Header = props => {

    const {currentUser} = useSelector(mapState);

    //console.log('Current User : ', currentUser.id);

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
                                <Link to="/mycart" >Cart <br />(Sign in to add to cart)</Link>
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
                                <Link to="/mycart" >My Cart</Link>
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
