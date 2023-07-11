import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import {auth} from "../config/Firebase3"
export const AuthContext = createContext()


export const AuthContextProvider= ({children})=>{
    const[currentUser, setCurrentUser ]= useState({});

    useEffect(()=>{
       const unsub= onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            console.log(user)
        })
        return ()=>{
unsub();
        }
    },[]);
    // if (currentUser === null) {
    //     // You can show a loading indicator or other fallback while waiting for the auth state to load
    //     return <div>Loading...</div>;
    //   }
    return(
        <AuthContext.Provider value={{currentUser}}>
        {children}
        </AuthContext.Provider>
    )



}