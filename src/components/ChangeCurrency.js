import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    //const handleChangeCurrency = (event) => {
       
   // }
    return (
<div className='alert alert-secondary'  style={{
    background: "green",
    color: "white"
 }}>
<span>{currency}</span>
 <select className="custom-select" id="inputGroupSelect01" style={{background: "green"}}  onChange={(event) => setNewCurrency(event.target.value)}>
                        <option defaultValue>Currency..{newCurrency}</option>
                        <option value="dollar" className="currency">$ Dollar</option>
                <option value="pound" className="currency">&#163; Pound</option>
                <option value="euro" className="currency">&#8364; Euro</option>
                <option value="ruppee" className="currency">&#8377; Ruppee</option>
                  </select>
</div>
    );
};
export default Currency;

   


