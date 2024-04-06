import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase_config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const Auth = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
const  createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const singUser =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}
const singInWithGoogle =()=>{
  
    return signInWithPopup(auth,googleProvider)
}
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth ,(currentUser)=>{
       setUser(currentUser)
       console.log('to thike ja',currentUser)
setLoading(false)
    });
    return()=>{
        unSubscribe()
    }
},[])
const authInfo = {
    logOut,
    user,
    createUser,
    singUser,
    loading,
    singInWithGoogle,
}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default Auth;
Auth.propTypes={
children:PropTypes.node
}