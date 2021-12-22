import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from '../firebase/init'

let AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unregisterAuthObserver = values.firebaseAuth.onAuthStateChanged(user => {
      if (user != null){
        setCurrentUser(user.email)
      }else{
        setCurrentUser(null)
      }
    })
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  let values = {
    currentUser: currentUser,
    firebaseAuth: firebaseAuth,
    register: register,
    firebaseLogout: firebaseLogout,
    firebaseLogin: firebaseLogin
  }
  
  function firebaseLogin(email, password){
    return signInWithEmailAndPassword(values.firebaseAuth, email, password)
  }

  function register(email, password){
    return createUserWithEmailAndPassword(values.firebaseAuth,email, password)
  }
  function firebaseLogout(){
    return signOut(values.firebaseAuth)
  }
  return <AuthContext.Provider value = {values}>{children}</AuthContext.Provider>
}