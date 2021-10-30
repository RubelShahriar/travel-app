import { useEffect, useState } from "react";
import initializeAuth from '../Firebase/firebase.init.js';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";

initializeAuth();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    
    const signInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider) 
    }

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    const signInWithGitHub = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } 
          });
    },[])

    return {
        user,
        logOut,
        signInWithGoogle,
        signInWithGitHub
    }
}
export default useFirebase;