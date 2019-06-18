import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import Login  from './Login';
import * as actions from '../actions';

class App extends Component {
    renderButton() {
        if (this.props.auth){
            return (
                <header>
                    <h1>Lista de países</h1>
                    <button onClick={ ()=> this.props.changeAuth(false) }>
                        Sing Out
                    </button>
                </header>
            );
        } 
    }

    render() {
        return (
            <div className="container">
                x
                { this.renderButton() }
                <div className="content" >
                    <Route path="/" exact component={ Login } />
                    <Route path="/main" component={ Main } />
                    <Redirect from='*' to='/' />
                </div>
            </div>
        )
    }
   
};

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions) (App);