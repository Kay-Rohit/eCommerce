import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';

import {auth} from '../firebase/utils';

import {useSelector} from 'react-redux';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
});

const Header = props => {

    const {currentUser} = useSelector(mapState);

    //console.log('Current User : ', currentUser.id);

    return (
        <div>
            <Navbar light expand="md">
                    <div className="container">
                        
                        <NavbarBrand className="mr-auto" href="/">eCommerce</NavbarBrand>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'>HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/items'>SHOP NOW</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                {currentUser && (
                                    <>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/mycart'>MY-CART</NavLink>
                                    </NavItem>
                                    <NavItem style={{marginTop:'5%'}}>
                                        <span onClick={() => auth.signOut()}>SIGN-OUT</span>
                                    </NavItem>
                                    </>
                                )}
                                {!currentUser && (
                                    <>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/mycart'>CART</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/signin'>SIGN-IN</NavLink>
                                    </NavItem>
                                    </>
                                )}
                            </Nav>

                    </div>
                </Navbar>
            
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;
