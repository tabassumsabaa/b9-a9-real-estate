import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged} from "firebase/auth";
import auth from "../Fairbase/fairbase.config";


export const AuthContext = createContext(null);


 //const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //create user
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password) =>{
         setLoading(true);
         setIsAuthenticated(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        setIsAuthenticated(false);
        return signOut(auth);
    }

   
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = { createUser, user, isAuthenticated, signIn, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


 