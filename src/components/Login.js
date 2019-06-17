import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Login extends Component {
    
    onSubmit() {
        this.props.changeAuth(true);
        this.props.history.push('/main');
        localStorage.setItem('auth', true);
    }

    render(){
        return(
            <div className="login">
                <div className="login__header">
                    <span>Login Form</span>
                    <a href="/"><i className="fas fa-times"></i></a>
                </div>
                <form className="login__form" onSubmit={ ()=> this.onSubmit() }>
                    <div className="login__group">
                        <input type="text" 
                            placeholder="Username" 
                            name="username"
                            maxLength="50"
                         />
                        <i className="fas fa-user user"></i>

                        <input type="password" 
                            placeholder="Password"
                            name="username" 
                            maxLength="10"
                         />
                        <i className="fas fa-lock password"></i>
                    </div>
                    <div className="btn__area">
                        <button>
                            Sign In
                        </button>
                        <a href="/">Lost Your Password?</a>
                    </div>
                </form>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return { 
       
        auth: state.auth,
        
    };
}

export default connect(mapStateToProps,actions)(Login);