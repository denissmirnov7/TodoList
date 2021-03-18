// import React from 'react';
//
// const AddTodo = ({setInput,setTodos,todos,input}) => {
//     const inputHandler =(e)=>{
//      setInput(e.target.value)
//     };
//     const formHandler =(e) =>{
//      e.preventDefault();
//      setTodos([...todos,{
//          todoName:input,
//          isActive: true,
//          isImportant:false,
//          id: Math.floor(Math.random()*1000)
//      }])
//         setInput('');
//     };
//     return (
//         <form action="" className='d-flex justify-content-between'onSubmit={formHandler}>
//             <input type="text" placeholder='What needs to be done' className='form-input'onChange={inputHandler} value={input}required={'text'}/>
//             <button type='submit' className='btn btn-outline-success'>Add todo</button>
//         </form>
//     );
// };
//
// export default AddTodo;


import React from 'react';

const AddTodo = ({setInput,setTodos,todos,input}) => {
    const inputHandler =(e)=>{
       setInput(e.target.value)
    };
    const formHandler=(e)=>{
       e.preventDefault() ;
       if (todos){
           setTodos([...todos,{
               todoName:input,
               isActive:true,
               isImportant:false,
               id:Math.floor(Math.random()*1000)
           }]);
       } else {
           setTodos([{
               todoName:input,
               isActive:true,
               isImportant:false,
               id:Math.floor(Math.random()*1000)
           }])
       }
        setInput('');
    };
    return (
        <form action=""className='d-flex justify-content-between' onSubmit={formHandler}>
            <input type="text" placeholder='What need to be done' className='form-input' onChange={inputHandler} value={input} required={'text'}/>
            <button type='submit' className='btn btn-outline-success'>Add todo</button>
        </form>
    );
};

export default AddTodo;



