import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth, firebaseStorage, firebaseDatabase } from '../firebase/init'
import { ref, uploadBytesResumable } from "@firebase/storage"
import { get, ref as dbRef, set } from "@firebase/database"
let AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState({
    signedUp: false,

  })
  useEffect(() => {
    const unregisterAuthObserver = values.firebaseAuth.onAuthStateChanged(async user => {
      if (user != null){
        setCurrentUser(user.displayName)
        const userData = await getDataFromDb()
        setUserData(userData.val())
      }else{
        setCurrentUser(null)
        setUserData({})
      }
    })
    return () => unregisterAuthObserver()
  }, []);

  let values = {
    currentUser: currentUser,
    userData: userData,
    firebaseAuth: firebaseAuth,
    register: register,
    firebaseLogout: firebaseLogout,
    firebaseLogin: firebaseLogin,
    getRef: getRef,
    uploadToFirebase: uploadToFirebase,
    addDataToDb: addDataToDb,
    getDataFromDb: getDataFromDb,
    setUserName: setUserName, 
    getDbRef: getDbRef
  }
  
  function getRef(path){
    return ref(firebaseStorage, path)
  }

  function getDbRef(path){
    return dbRef(firebaseDatabase, path)
  }

  function firebaseLogin(email, password){
    return signInWithEmailAndPassword(values.firebaseAuth, email, password)
  }

  function register(email, password){
    return createUserWithEmailAndPassword(values.firebaseAuth,email, password)
  }

  async function setUserName(username){
  updateProfile(firebaseAuth.currentUser, {displayName: username}).then((resp) => {
      setCurrentUser(firebaseAuth.currentUser.displayName)
    })
  }

  function firebaseLogout(){
    return signOut(values.firebaseAuth)
  }

  function uploadToFirebase(ref, file, metadata){
    return uploadBytesResumable(ref, file, metadata) 
  }

  function getDataFromDb(path){
    return get(getDbRef(`users/${values.firebaseAuth.currentUser.uid}/${path}`))
  }

  function addDataToDb(path, data){
    return set(getDbRef(`users/${values.firebaseAuth.currentUser.uid}/${path}`), data)
  }

  return <AuthContext.Provider value = {values}>{children}</AuthContext.Provider>
}