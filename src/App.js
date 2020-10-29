import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, handleUserProfile} from '../src/firebase/utils';

//layouts
import Mainlayout from '../src/layouts/mainlayout';
import HomeLayout from '../src/layouts/homelayout';

//pages
import Homepage from '../src/pages/homepage';
import Registration from '../src/pages/registration';
import SignIn from '../src/pages/signin';
import { Component } from 'react';

const initialState = {
  currentUser: null
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({
        ...initialState
      })
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {

    const {currentUser} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <HomeLayout currentUser={currentUser}>
              <Homepage />
            </HomeLayout>
          )} />
          <Route path="/registration" render={() => (
            <Mainlayout currentUser={currentUser}>
              <Registration />
            </Mainlayout>
          )} />
          <Route path="/signin" 
            render = {() => currentUser ? <Redirect to="/" /> : (
              <Mainlayout currentUser={currentUser}>
                <SignIn />
              </Mainlayout>

            )}
          />
        </Switch>
      </div>
    );
  }

}

export default App;
