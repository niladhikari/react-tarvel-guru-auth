import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const userLogOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const singInGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }


    useEffect(()=>{
    const unSubsCribe =  onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
     })

     return ()=>{
        unSubsCribe();
     }
    },[])

    const authInfo = {
        createUser,
        userSignIn,
        user,
        userLogOut,
        loading,
        singInGoogle,
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
  }

export default AuthProvider;