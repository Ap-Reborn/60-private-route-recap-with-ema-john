import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    // nicar code ta login korle home a nia ahse 1
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            // form reset hocce na **********
            form.reset();
                // nicar code ta login korle home a nia ahse 2
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='' required />
            </div>
            <button className="btn-submit" type='submit' value='login'>Login</button>
        </form>
        <p><small>New  to ema-john?</small><Link to="/signup">Create New Account</Link></p>
        </div>
    );
};

export default Login;