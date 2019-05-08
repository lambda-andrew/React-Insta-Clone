import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    state = {
        username: '',
        loggedIn: false
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    login = () => {
        if(localStorage.getItem('username')) {
            localStorage.removeItem('username');
            this.setState({
                username: '',
                loggedIn: false
            })
        } else {
            localStorage.setItem('username', this.state.username);
            this.setState({
                ...this.state,
                loggedIn: true
            })
        }
    }

    render() {
        return (
            <div className='login'>
                <h1><i className="fab fa-instagram"></i> Instagram</h1>
                <form onSubmit={this.login}>
                    <input 
                        value={this.state.username}
                        placeholder='Username'
                        name='username'
                        onChange={this.handleChanges}
                    />
                    <input 
                        type='password'
                        placeholder='Password'
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}