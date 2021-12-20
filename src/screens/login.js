import React, {useContext, useState } from 'react';
import { GlobalContext } from '../context/context'
import {auth , signInWithEmailAndPassword} from '../configs/firebase'

function Login(){
    const {state, dispatch } = useContext(GlobalContext)
    const [Email , setEmail] = useState('')
    const [Password , setPassword] = useState('')

    const Loginuser = async () => {
        try {let user = await signInWithEmailAndPassword(auth , Email , Password);
        console.log('Login Successfully' , user)
        }catch(err){
            console.log(err)
        }
    }


    return (
             <div>
             <label>Email : 
             <input type="email" value={Email} onChange={(evt)=>{setEmail(evt.target.value)}} /></label> <br />
             <label>Password : 
             <input type="password" value={Password} onChange={(evt)=>{setPassword(evt.target.value)}} /></label> <br />
             <button onClick={Loginuser}>Login</button>
             </div>
         )

}

export default Login;
