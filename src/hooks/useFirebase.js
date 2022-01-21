import { useEffect, useState } from "react";
import initializeAuth from '../Firebase/firebase.init.js';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";

initializeAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    
    const signInWithGoogle = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider) 
    }
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    setIsLoading(false)
    }

    const signInWithGitHub = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
        setIsLoading(false)
          });
    },[])

    return {
        user,
        logOut,
        signInWithGoogle,
        signInWithGitHub,
        isLoading
    }
}
export default useFirebase;