import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context'

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [newDrink, setNewDrink] = useState('');
    const [newSnack, setNewSnack] = useState('');

    const updateDrink = () => {
        console.log('newDrink', newDrink);
        dispatch({ type: "UPDATE_DRINK", payload: newDrink });
    }

    const updateSnack = () => {
        dispatch({ type: "UPDATE_SNACK", payload: newSnack });
    }

    return (
        <div>
            <h3>This is yummy {state?.snacks} and {state?.drink}</h3>
            <input type="text" placeholder='UPDATE DRINK' value={newDrink} onChange={(ev) => { setNewDrink(ev.target.value) }} />
            <input type="text" placeholder='UPDATE SNACK' value={newSnack} onChange={(ev) => { setNewSnack(ev.target.value) }} />
            <button onClick={updateDrink}>Update Drink</button>
            <button onClick={updateSnack}>Update Snack</button>
        </div>
    )
}

export default Snacks;