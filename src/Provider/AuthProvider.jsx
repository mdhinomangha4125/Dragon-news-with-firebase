import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    console.log(loading, user)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }
    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
         });
         return ()=> {
            unsubscribe(); 
         }
    },[])
    const authData = {
        user,
        setUser,
        createUser,
        logoutUser,
        signIn,
        loading,
        setLoading,
        updateUser
    }

    return (<AuthContext value={authData}>{children}</AuthContext>);
};

export default AuthProvider;