import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth, firebaseStorage } from '../firebase/init'
import { ref, uploadBytesResumable } from "@firebase/storage"

let AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unregisterAuthObserver = values.firebaseAuth.onAuthStateChanged(user => {
      if (user != null){
        setCurrentUser(user.uid)
      }else{
        setCurrentUser(null)
      }
    })
    return () => unregisterAuthObserver()
  }, []);

  let values = {
    currentUser: currentUser,
    firebaseAuth: firebaseAuth,
    register: register,
    firebaseLogout: firebaseLogout,
    firebaseLogin: firebaseLogin,
    getRef: getRef,
    uploadToFirebase: uploadToFirebase
  }
  
  function getRef(path){
    return ref(firebaseStorage, path)
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

  function uploadToFirebase(ref, file, metadata){
    console.log("we here", metadata)
    return uploadBytesResumable(ref, file, metadata) 
  }
  return <AuthContext.Provider value = {values}>{children}</AuthContext.Provider>
}