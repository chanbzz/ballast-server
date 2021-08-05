import React, { Component } from 'react';
import './header.css';
import pic from '../images/ballastpic.png';
import { connect } from 'react-redux';
import Dashboard from './Dashboard.js'



// redirect function 



class SignUpButtons extends Component {

    


    
    renderContent() {
        
        switch (this.props.auth) {
            case null:
                return;
            
            case false:
                return (
                <div id="container">
                <img id='logo' alt='logo' src={pic}/>
                <ul>
                <li><a href="/auth/google"><button>Sign In</button></a></li>
                <div className='divider' />
                <li><a href="/auth/google"><button>Sign Up</button></a></li>
                </ul>
                </div>
                )

            default: 
                return (
                <div>
                    <Dashboard />
                    <li><a href="/api/logout"><button>Logout</button></a></li> 
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