import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { currencySymbol  } from './ChangeCurrency';
const Budget = () => {
    const { budget } = useContext(AppContext);

   // const [newCurrency, setNewCurrency] = useState()
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > budget) {
            alert("The value cannot exceed the remaing fund £"+ budget)
            return;
        }
        setNewBudget(event.target.value);
    }



    return (
<div className='alert alert-secondary'>
<span>Budget: {currencySymbol} {budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};


export default Budget;
