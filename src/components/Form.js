import React,{useState} from 'react'

function Form(props) {
	const defaultvalue = {
		expensetitle:'',
		expenseamount:'',
		expensedate:'',
	}
	const [userinput,setuserinput] = useState(defaultvalue);

	const titlehandler = (event)=>{
		setuserinput({...userinput,expensetitle:event.target.value})
	}
	// const taghandler = (event)=>{
	// 	setuserinput({...userinput,tag:event.target.value})
	// }
	const amounthandler = (event)=>{
		setuserinput({...userinput,expenseamount:event.target.value})
	}
	const datehandler = (event)=>{
		setuserinput({...userinput,expensedate:event.target.value})
	}
	const submit = (event) =>{
		event.preventDefault();
		props.setuserexpenses([...props.expenses, userinput])
	}
  return (
	<div>
	  <h1>Add your new expense</h1>
	  <input type='text' onChange={titlehandler} className='name' placeholder='title' value={userinput.expensetitle}/><br/>
	  {/* <input type='text' onChange={taghandler} className='name' placeholder='tags' value={userinput.tag}/><br/> */}
	  <input type='number' onChange={amounthandler} className='name' placeholder='amount' value={userinput.expenseamount}/><br/>
	  <input type='date' onChange={datehandler} className='name' placeholder='date' value={userinput.expensedate}/><br/>
	  <input type='submit' onClick={submit}  value='submit'/>
	</div>
  )
}

export default Form
