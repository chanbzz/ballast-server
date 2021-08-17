import React, { Component } from 'react';
import './signup.css';
import pic from '../images/ballastpic.png';
import { connect } from 'react-redux';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';


class SignUpButtons extends Component {

    


    
    renderContent() {
        
        switch (this.props.auth) {
            case null:
                return;
            
            case false:
                return (
                <>
                    <div id="container">
                        <img id='logo' alt='logo' src={pic}/>
                            <ul id='login-buttons'>
                            <li><a href="/auth/google"><button>Sign In</button></a></li>
                            <div className='divider' />
                            <li><a href="/auth/google"><button>Sign Up</button></a></li>
                            </ul>
                    </div>
                </>
                )

            default: 
                return (
                <div>
                </div>
                ) 
        }
    }

    render() {
        return (
            <div> 
                {this.renderContent()} 

            </div>
            
        )


    }
}

function mapStateToProps({ auth }) {
    return { auth };
}



export default connect(mapStateToProps)(SignUpButtons);