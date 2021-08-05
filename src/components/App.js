import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import SignUpButtons from './SignUpButtons';


const Dashboard = () => <h2>Dashboard</h2>
const QuestionNew = () => <h2>Questions</h2>
const Landing = () => <h2></h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()

    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        
                        <SignUpButtons />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/dashboard/questions" component={QuestionNew} />
                    </div>

                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);