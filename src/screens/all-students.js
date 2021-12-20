import React, {useContext, useState } from 'react';
import { GlobalContext } from '../context/context'


function Allstudents(){
    const {state, dispatch } = useContext(GlobalContext);
    let studentsArr = (state.student)
    return(
        <div>
        <table style={{border : '2px solid #000'}}>
        <thead>
            <tr style={{border : '2px solid #000'}}>
            <th style={{border:'1px solid #000'}}>Student Name</th>
            <th style={{border:'1px solid #000'}}>Roll Number</th>
            <th style={{border:'1px solid #000'}}>Total Marks</th>
            <th style={{border:'1px solid #000'}}>Grade</th>
            <th style={{border:'1px solid #000'}}>FeedBack</th>
            </tr>
        </thead>
        {
            studentsArr.map((st)=>{
                return(
                <tbody key={st.studentname + 'newkey'}>
                    <tr>
                    <td style={{border:'1px solid #000'}}>{st.studentname}</td>
                    <td style={{border:'1px solid #000'}}>{st.rollnumber}</td>
                    <td style={{border:'1px solid #000'}}>{st.totalmarks}</td>
                    <td style={{border:'1px solid #000'}}>A</td>
                    <td style={{border:'1px solid #000'}}>{st.feedback}</td>
                    </tr>
                </tbody>
                )
            })
        }
        </table>
        </div>
    )   
        }

export default Allstudents