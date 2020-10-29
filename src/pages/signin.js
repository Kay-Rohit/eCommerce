import React, { Component } from 'react';
import Button from '../components/form/button';

import {signInWithGoogle} from '../firebase/utils';

class SignIn extends Component {

    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <>
            <div className="signin">
                <h2>SignIn</h2>  
                <div className="formwrap">
                    <form onSubmit={this.handleSubmit}>
                        <div className="googleSignin">
                            <div>
                                <Button onClick={signInWithGoogle}>
                                    Sign In with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div> 
            </div>
            </>
        );
    }
    
}

export default SignIn;
