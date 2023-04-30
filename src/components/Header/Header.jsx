import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    // object hisabe set korle object hisabe recive korbo
//    logout ta use context anlama pase bosalam
    const {user,logOut}=useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
          logOut()
          .then(result => {})
          .catch(error => console.log(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign up</Link>
                {user && <span className='text-white'>welcome {user.email} <button onClick={handleLogOut}>sign out</button></span> }
            </div>
        </nav>
    );
};

export default Header;