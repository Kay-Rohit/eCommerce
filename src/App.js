import React, { useEffect } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, handleUserProfile} from '../src/firebase/utils';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';

//hoc
import WithAuth from './hoc/withAuth';

//layouts
import Mainlayout from '../src/layouts/mainlayout';
import HomeLayout from '../src/layouts/homelayout';

//pages
import Homepage from '../src/pages/homepage';
import Item from '../src/pages/items';
import Cart from '../src/pages/cart';
import SignIn from '../src/pages/signin';
import ProductDeatils from '../src/pages/productDetails';

const App = props => {

  const {setCurrentUser, currentUser} = props;

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      }
      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
  }, []);

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <HomeLayout>
              <Homepage />
            </HomeLayout>
          )} />
          <Route path="/items" render={() => (
              <Mainlayout>
                <Item />
              </Mainlayout>
          )} />
          <Route path="/product/:productID" render={() => (
              <Mainlayout>
                <ProductDeatils />
              </Mainlayout>
          )} />
          <Route path="/cart" render={() => (
            <WithAuth>
              <Mainlayout>
                <Cart />
              </Mainlayout>
            </WithAuth>
            
          )} />
          <Route path="/signin" 
            render = {() => currentUser ? <Redirect to="/" /> : (
              <Mainlayout>
                <SignIn />
              </Mainlayout>

            )}
          />
        </Switch>
      </div>
    );
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
