import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import app from "../../firebase.config"
import { GoogleAuthProvider } from "firebase/auth/web-extension"

export const authContext = createContext(null)

const AuthProvider=({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const auth = getAuth(app)
    const register =(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const Login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

  

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
          console.log(currentUser)
        });
        return () => {
          unsubscribe();
        };
      }, []);
    

    console.log("Current user:", user)
console.log(user?.email)
    const shared ={register,Login,user,loading,setLoading}
    return(
        <authContext.Provider value={shared}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider