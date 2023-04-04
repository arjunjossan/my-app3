import React,{ useState } from 'react'
// import React,{ useState,  createContext, useContext } from 'react'
import './Expense.css'
import ExpenseDate from './ExpenseDate';

function Expense(props) {
	const[title,setTitle] = useState(props.title);
	const clickToChange = () =>{
		// setTitle("pending fees")
		const value = prompt('enter the new title')
		setTitle(value)
		console.log("pending fees")
	}
	// const dollar = useContext(props.amount)
  return (
	<>
	<div className='expense-item'>
	{/* <div>{props.date.toDateString()}</div> */}
	{/* <div>{<ExpenseDate date={props.date}/>}</div> */}
	 <ExpenseDate date={props.date}/>
	<div className='expense-item-discription'>{title}</div>
	<div className='expense-item-price'>{props.amount}</div>
	{/* <div className='expense-item-price'>{`$(dollar)`}</div> */}
	<button onClick={clickToChange}>Change</button>
	</div>
	</>
  );
}

export default Expense
