import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export  let currencySymbol = "£";

export const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
   
  

    const changeCurrency = (event) => {
       
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });
        
    }
    
if(newCurrency === "pound") {
        currencySymbol = "£"
    } else if(newCurrency === "dollar") {
        currencySymbol = "$"
    } else if(newCurrency === "euro") {
        currencySymbol = "€"
    } else if(newCurrency === "ruppee") {
        currencySymbol = "₹"
    }
 
    
    return (

<div className='alert alert-secondary'  style={{
    background: "green",
    color: "white"
 }}>
<span>{currencySymbol} </span>
 <select className="custom-select" id="inputGroupSelect01" style={{background: "green"}}  onChange={(event) => changeCurrency(setNewCurrency(event.target.value))}>
                        <option defaultValue>Currency {currency}  Pound</option>
                        <option value="dollar" className="currency">&#x24; Dollar</option>
                <option value="pound" className="currency">&#163; Pound</option>
                <option value="euro" className="currency">&#8364; Euro</option>
                <option value="ruppee" className="currency">&#8377; Ruppee</option>
                  </select>

</div>
    );
};
export default  Currency;


  



