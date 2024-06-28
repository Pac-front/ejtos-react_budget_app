import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { currencySymbol  } from './ChangeCurrency';
const Budget = () => {
    const { budget, expenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
  // const [newRemaining, setNewRemaining] = useState(remaining);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("The value cannot exceed the remaing fund £"+ budget)
            return;    
        }
        setNewBudget(event.target.value);
        if(event.target.value < totalExpenses) {
            alert("You cannot reduce the value lower than the spending");
            setNewBudget(event.target.value = totalExpenses);
            
              
        } 
        
    }



    return (
<div className='alert alert-secondary'>
<span>Budget: {currencySymbol}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};


export default Budget;




