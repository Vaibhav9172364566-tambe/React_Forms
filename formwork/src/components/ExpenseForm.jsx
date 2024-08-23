import React, { useState } from 'react'

function ExpenseForm({setExpenses}) {
  
  

  const[expensess,setExpensess]=useState({
    title:'',
    category:'',
    amount:''
  })

  const handleSubmit=(e)=>
    {
e.preventDefault()
console.log(expensess);

// const expenses={title,category,amount,id:crypto.randomUUID()}
// setExpenses((
//   prevState)=>[...prevState,expenses])
 


// const expense={...getFormData(e.target),id:crypto.randomUUID()}


 setExpenses((prevState)=>[...prevState,{...expensess,id:crypto.randomUUID()}])

// e.target.reset()

setExpensess({
  title:'',
    category:'',
    amount:''

})

  }
//   const getFormData=(form)=>{
//     const formData=new FormData(form);
// const data={}
// for(const [key,value] of formData.entries()){
//   data[key]=value
  
// }
// return data

//   }
  return (
    
    
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name='title' value={expensess.title} onChange={(e)=>setExpensess((prevState)=>({...prevState,title:e.target.value}))}/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>

            
            <select id='category' name='category' value={expensess.category} onChange={(e)=>setExpensess((prevState)=>({...prevState,category:e.target.value}))}>
                  <option value="" hidden="">Select Category</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name='amount' value={expensess.amount} onChange={(e)=>setExpensess((prevState)=>({...prevState,amount:e.target.value}))}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
    </>
  )
}

export default ExpenseForm