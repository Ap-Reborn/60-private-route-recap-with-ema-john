import React, { createContext, useEffect, useState } from 'react';
// ai nicer line ta manuli import korte hoi auto na hole
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);
 
const auth =getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser] =useState(null); 
const [loading,setLoading] =useState(true);
// akta function banabo jeta do a peramiter niba
const createUser = (email,password) => {
    setLoading(true);
    // nicer line ta fire base er ata 3 ta jinis lage
    return createUserWithEmailAndPassword(auth,email,password);
    // aita vaire use korbo tai nica okan teke patabo createUser
}
const signIn = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
// akn signout ta nam logout dibo jate firbaase sate mil na kai.
// ata sodo akta peramiter niba.
const logOut = () => {
    return signOut(auth);
}
// observer user auth state
useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
    });
    // stop observing while unmounting
    return () => {
        return unsubscribe();
    }
},[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;