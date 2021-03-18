// import React from 'react';
//
// const Todo = ({name,todos,setTodos,todoObj}) => {
//     const activeHandler =()=>{
//
//         setTodos(todos.map((el)=>{
//        return el.id === todoObj.id ?{ ...el,isActive : !el.isActive}:el;
//
//    }))
//     };
//     const deleteHandler =()=>{
//         setTodos(todos.filter((el)=>{
//             return el.id!==todoObj.id
//         }))
//     };
//     const warningHandler =()=>{
//
//         setTodos(todos.map((el)=>{
//             return el.id === todoObj.id ?{ ...el,isImportant : !el.isImportant}:el;
//         }))
//     };
//     return (
//         <li className='d-flex justify-content-between align-items-center list-group-item flex-wrap'>
//             <span className={`todoName ${todoObj.isActive ? '':'done'}${todoObj.isImportant ? 'important':''}`}>{name}</span>
//             <div className='setStatusBtns'>
//                 <button type="button" className= {`btn btn-outline-success doneBtn ${todoObj.isActive ? '':'active'}`} onClick={activeHandler}><i className="fas fa-check"></i></button>
//                 <button type="button" className= {`btn btn-outline-warning starBtn ${todoObj.isImportant ? 'active': ''}`} onClick={warningHandler}><i className="fas fa-star"></i></button>
//                 <button type="button" className= "btn btn-outline-danger" onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>
//             </div>
//         </li>
//     );
// };
//
// export default Todo;

import React from 'react';

const Todo = ({name,todos,setTodos,todoObj}) => {
    const activeHandler = ()=>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ? {...el,isActive :!el.isActive}:el;
        }))
    };
    const deleteHandler = () =>{
        setTodos(todos.filter((el)=>{
            return el.id !== todoObj.id
        }))
    };
    const warningHandler =() =>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ?{...el,isImportant :!el.isImportant}:el;
        }))
    };
    return (
        <li className='d-flex justify-content-between align-items-center list-group-item flex-wrap'>
            <span className={`todoName ${todoObj.isActive ? '':'done'}${todoObj.isImportant ? 'important':''}`}>{name}</span>
        <div className='setStatusBtns'>
            <button type='button' className={`btn btn-outline-success doneBtn ${todoObj.isActive ? '':'active'}`} onClick={activeHandler}><i className="fas fa-check"></i></button>
            <button type='button' className={`btn btn-outline-warning starBtn ${todoObj.isImportant ? '':'active'}`} onClick={warningHandler}><i className="fas fa-star"></i></button>
            <button type="button" className= "btn btn-outline-danger" onClick={deleteHandler}><i className="fas fa-trash-alt"></i></button>

        </div>
        </li>
    );
};

export default Todo;





