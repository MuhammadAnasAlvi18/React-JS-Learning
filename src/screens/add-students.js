import React, {useContext, useState } from 'react';
import { GlobalContext } from '../context/context'
import { Link } from 'react-router-dom'


function Addstudents(){
    const {state, dispatch } = useContext(GlobalContext);
    const [stName , setstName] = useState('')
    const [rollNum , setrollNum] = useState('')
    const [totalMarks , settotalMarks] = useState('')
    const [feedback , setfeedback] = useState('')


    function AddStudentFunc(){
        const studentOBJ = {
            studentname : stName,
            rollnumber : rollNum,
            totalmarks : totalMarks,
            feedback : feedback
        }
        console.log(studentOBJ)
        localStorage.setItem(rollNum , JSON.stringify(studentOBJ))
        dispatch({type: 'ADD_STUDENT' , payload : studentOBJ})
    }


    return(
    <div>
    <h1>ADD Student</h1>
    <label>Student Name : 
        <input type="text" value={stName} onChange={(evt)=>{setstName(evt.target.value)}}/></label> <br />
    <label>Roll Number : 
        <input type="text" value={rollNum} onChange={(evt)=>{setrollNum(evt.target.value)}}/></label> <br />
    <label>Total Marks : 
        <input type="text" value={totalMarks} onChange={(evt)=>{settotalMarks(evt.target.value)}}/></label> <br />
    <label>Feedback : 
        <input type="text" value={feedback} onChange={(evt)=>{setfeedback(evt.target.value)}}/></label> <br />  
        <button onClick={AddStudentFunc}>Add Student</button>
        <br />
        <br />
        <h3 style={{border:'2px solid #000'},{padding:'8px'}}><Link to='/all-students'>All Students</Link></h3>  
    </div>
    )
}

export default Addstudents;