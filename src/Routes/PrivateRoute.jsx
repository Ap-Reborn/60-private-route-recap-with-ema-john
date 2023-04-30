import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    //  page path location dekar jonno nicar code ta
    const location=useLocation();
    console.log(location);
    if(loading){
        return <div>Loading.........</div>
    }
    if(user){
        return children;
    }
 return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;