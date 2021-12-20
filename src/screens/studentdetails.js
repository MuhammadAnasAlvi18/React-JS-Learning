import React, {useContext, useState } from 'react';
import { GlobalContext } from '../context/context'


function Studentdetails(){

    const {state, dispatch } = useContext(GlobalContext);
    console.log(state)

    return(
        <div>
        <h1>Your Name Is {state.student[1].studentname}</h1>
        <h2>Roll Number Is {state.student[1].rollnumber}</h2>
        <h2>You Get {state.student[1].totalmarks} Marks</h2>
        <h3>Grade {state.student[1].grade}</h3>
        <p>Remarks : {state.student[1].feedback}</p>
        </div>
    )
}

export default Studentdetails;