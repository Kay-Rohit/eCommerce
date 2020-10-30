import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/utils';

import {useSelector} from 'react-redux';

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

function Header(props) {

    const {currentUser} = useSelector(mapState);

    return (
        <div className="header">
            <div>
                <Link to="/">Header</Link>
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
                                <Link to="/cart" >Cart</Link>
                            </li>
                        </ul>
                    </div>
                )}
                {currentUser && (
                    <>
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()} >Logout</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/cart" >Cart</Link>
                            </li>
                        </ul>
                    </>
                )}
                
            </div>
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;
