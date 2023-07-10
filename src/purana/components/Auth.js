import { auth , googleProvider} from '../config/Firebase';
import { createUserWithEmailAndPassword ,signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';


const Auth = () => {
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    
    //console.log(auth?.currentUser?.email)
    const SignIn=async()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        } catch(err){
            console.eroor(err)
        }
       
    }
    const SignInWithGoogle=async()=>{
     
        try{
            await signInWithPopup(auth, googleProvider)
        } catch(err){
            console.error(err)
        }
    }
    const LogOut=async()=>{
     
        try{
            await signInWithPopup(auth)
        } catch(err){
            console.error(err)
        }
    }


  return (
    <div>
        <input placeholder="Email..." onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <input type='password' placeholder="Password..." onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button onClick={SignIn}>Sign in</button>
        <button onClick={SignInWithGoogle}>Sign in with goole</button>
        <button onClick={LogOut}>Log Out</button>
    </div>
  )
}
export default Auth