import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Question from './Question';
import Dashboard from './Dashboard';
import SignUpButtons from './SignUpButtons';


const Dash = () => <div><Dashboard /></div>
const QuestionNew = () => <div><Question /></div>
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
                        
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/dashboard" component={Dash} />
                        <Route exact={true} path="/questions-page" component={QuestionNew} />
                    </div>

                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);