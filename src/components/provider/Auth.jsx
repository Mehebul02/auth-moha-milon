import { createContext, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase_config";
export const AuthContext = createContext(null)
const Auth = ({children}) => {
const [user,setUser] = useState(null)
const  createUser = () =>{
    return createUserWithEmailAndPassword(auth,)
}
const authInfo = {user}
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