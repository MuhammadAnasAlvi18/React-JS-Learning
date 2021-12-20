import React, {useContext, useState } from 'react';
import { GlobalContext } from '../context/context'
import {auth , createUserWithEmailAndPassword} from '../configs/firebase'

function SignUp(){
    const {state, dispatch } = useContext(GlobalContext)
    const [Email , setEmail] = useState('')
    const [Password , setPassword] = useState('')

    const Register = async () => {
        try{await createUserWithEmailAndPassword(auth , Email , Password)
        console.log('Register Successfully')}
        catch(err){
            console.log(err)
        }
    }


    return (
             <div>
             <label>Email : 
             <input type="email" value={Email} onChange={(evt)=>{setEmail(evt.target.value)}} /></label> <br />
             <label>Password : 
             <input type="password" value={Password} onChange={(evt)=>{setPassword(evt.target.value)}} /></label> <br />
             <button onClick={Register}>Register</button>
             </div>
         )

}

export default SignUp;




















// import React, {useContext, useState } from 'react';
// import { GlobalContext } from '../context/context'

// function SignUp() {
//     const {state, dispatch } = useContext(GlobalContext);
//     const [userName , setuserName] = useState('')
//     const [userEmail , setuserEmail] = useState('')
//     const [userPassword , setuserPassword] = useState('')
//     const [userRole , setuserRole] = useState('')

//     function SignuserObj(){
//         const userObj = {
//             userName : userName,
//             userEmail : userEmail,
//             userPassword : userPassword,
//             userRole : userRole
//         }

//         localStorage.setItem(userEmail , JSON.stringify(userObj))
//         dispatch({type : 'ADD_USER' , payload : userObj})

//     }

//     return (
//         <div>
//         <label>UserName : 
//         <input type="text" value={userName} onChange={(evt)=>{setuserName(evt.target.value)}} /></label> <br />
//         <label>Email : 
//         <input type="email" value={userEmail} onChange={(evt)=>{setuserEmail(evt.target.value)}} /></label> <br />
//         <label>Password : 
//         <input type="password" value={userPassword} onChange={(evt)=>{setuserPassword(evt.target.value)}} /></label> <br />
//         <label>Role : 
//         <input type="text" style={{textTransform:'uppercase'}} value={userRole} onChange={(evt)=>{setuserRole(evt.target.value)}} /></label> <br />
//         <button onClick={SignuserObj}>Sign Up</button>
//         </div>
//     )
// }

// export default SignUp;