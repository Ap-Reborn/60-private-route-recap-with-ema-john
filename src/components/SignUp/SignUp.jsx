import React from 'react';
import './SignUp.css';
const SignUp = () => {
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
    <form>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='' required />
        </div>
        <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='' required />
        </div>
        <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name='confirm' id='' required />
        </div>
        <button className="btn-submit" type='submit' value='login'>Sign Up</button>
    </form>
    </div>
    );
};

export default SignUp;