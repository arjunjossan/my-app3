import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
	const newdate = new Date(props.date);
	const date = newdate.toLocaleString('default',{day:'numeric'});
	const month = newdate.toLocaleString('default',{month:'long'});
	const year = newdate.toLocaleString('default',{year:'numeric'});
  return (
	<div className='Expense-Date'>
	  <h3>{date}<br/>{month}<br/>{year}</h3>
	</div>
  )
}

export default ExpenseDate
