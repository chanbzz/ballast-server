import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Question from './Question';
import Dashboard from './Dashboard';
import SignUpButtons from './SignUpButtons';
import QuestionHelp from './QuestionHelp';


const Dash = () => <div><Dashboard /></div>
const QuestionNew = () => <Question />
const Landing = () => <h2></h2>
const HelpMe = () => <QuestionHelp />

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
                        <Route exact={true} path="/questions-page/help" component={HelpMe} />
                    </div>

                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);