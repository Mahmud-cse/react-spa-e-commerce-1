import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initailizeAuthentication from '../../Firebase/firebase.init';
initailizeAuthentication();

const GOprovider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user,setUser]=useState({});
    const auth = getAuth();

    const signInUsingGoogle=()=>{
      return  signInWithPopup(auth, GOprovider);

    }

    const signOutUsingGoogle=()=>{
        signOut(auth).then(() => {
            setUser({});
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
    },[]);

    return {
        user,
        signInUsingGoogle,
        signOutUsingGoogle
    }
};

export default useFirebase;