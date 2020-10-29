import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/utils';

function Header(props) {

    const {currentUser} = props;

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
                                <Link to="/registration">Registration</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/signin">SignIn</Link>
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
