import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { currencySymbol  } from './ChangeCurrency';


const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td> { currencySymbol  } {props.cost}</td>
        
        <td>
            <button className="btn" style={{background: "green",
             borderRadius: "100%",
             paddingRight: "18px", 
             paddingLeft: "18px"
            }} onClick={event=> increaseAllocation(props.name)}
         >
            <div style={{color: "white",
         fontWeight: "bold",  
           fontSize: "35px"}} >+</div></button>
          </td>
          
        <td><button className="btn" style={{background: "red",
             borderRadius: "100%",
             paddingRight: "18px", 
             paddingLeft: "18px",
            }} onClick={event=> decreaseAllocation(props.name)}
          > <div style={{color: "white",
          fontWeight: "bold",  
            fontSize: "35px",
            }} >-</div></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};



export default ExpenseItem;
