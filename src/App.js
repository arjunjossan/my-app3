
import './App.css';
import Expense from './components/Expense';
import Navbar from './components/Navbar';
// import ClassBased from './components/ClassBased';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  // const expenseamount = '250$';
  // const expensedate = new Date();
  // const expensetitle = 'car on sale';


  const object = [
    {
      expenseamount : '250$',
      expensetitle : 'car on sale',
      expensedate: "2023-01-12",
    }
  ];  
  
  const [expenses,setuserexpenses] = useState(object);

  return (
    <>
    <Navbar/>
    <Form expenses={expenses} setuserexpenses={setuserexpenses}/>
    {
      expenses.map(function(item){
        return <Expense amount={item.expenseamount} date={item.expensedate} title={item.expensetitle} />
      })
    }
    {/* <Expense amount={object[0].expenseamount} date={object[0].expensedate} title={object[0].expensetitle} />
    <Expense amount={object[1].expenseamount} date={object[1].expensedate} title={object[1].expensetitle} />
    <Expense amount={object[2].expenseamount} date={object[2].expensedate} title={object[2].expensetitle} />
    <Expense amount={object[3].expenseamount} date={object[3].expensedate} title={object[3].expensetitle} /> */}
    {/* <div>
      <ClassBased/>
    </div> */}
    </>
  );
}

export default App;
