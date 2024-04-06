import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase_config";
export const AuthContext = createContext(null)
const Auth = ({children}) => {
const [user,setUser] = useState(null)
const  createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const singUser =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{
    onAuthStateChanged(auth ,(currentUser)=>{
       setUser(currentUser)
       console.log('to thike ja',currentUser)

    })
},[])
const authInfo = {user,createUser,singUser}
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