import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    //const handleChangeCurrency = (event) => {
       
   // }
    return (
<div className='alert alert-secondary'>
<span>{currency}</span>
 <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setNewCurrency(event.target.value)}>
                        <option defaultValue>Currency..{newCurrency}</option>
                        <option value="dollar" name="currency">$</option>
                <option value="pound" name="currency">&#163;</option>
                <option value="euro" name="currency">&#8364;</option>
                <option value="ruppee" name="currency">&#8377;</option>
                  </select>
</div>
    );
};
export default Currency;

