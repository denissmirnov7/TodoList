// import React ,{useState,useEffect}from 'react';
// import './style.css'
// import Header from "../header"
// import SearchPanel from "../searchPanel";
// import TodoList from "../todoList";
// import AddTodo from "../add-todo";
//
// function App() {
//     const [input,setInput]= useState('');
//     const [todos,setTodos] =useState([]);
//     const [status,setStatus] =useState('all');
//     const [filteredTodos,setFilteredTodos] =useState([]);
//     const [searchInputText,setSearchInputText]=useState('');
//     useEffect(()=>{
//         filterHandler();
//         saveTodos();
//         Array.from(document.getElementsByClassName('statusBtn')).map((btn)=>{
//             status === btn.value? btn.classList.add('active'):btn.classList.remove('active')
//         })
//     },[todos,status]);
//     const saveTodos = () => {
//         localStorage.setItem('todo',JSON.stringify(todos))
//     };
//     const filterHandler =() => {
//         switch (status) {
//             case 'active':
//                 setFilteredTodos(todos.filter((todo) => todo.isActive));
//                 break;
//             case 'done':
//                 setFilteredTodos(todos.filter((todo) => !todo.isActive));
//                 break;
//             default:
//                 setFilteredTodos(todos)
//         }
//     };
//     return (
//         <div className='app'>
//             <div className='todo-container'>
//                 <Header todos={todos}/>
//                 <SearchPanel setStatus={setStatus} status={status} setSearchInputText={setSearchInputText}/>
//                 <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} searchInputText={searchInputText}/>
//                 <AddTodo setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>
//             </div>
//         </div>
//     );
// };
//
// export default App;

import React ,{useState,useEffect}from 'react';
import './style.css'
import Header from "../header"
import SearchPanel from "../searchPanel";
import TodoList from "../todoList";
import AddTodo from "../add-todo";

function App() {
    const [input,setInput]= useState('');
    const [todos,setTodos] =useState([]);
    const [status,setStatus] =useState('all');
    const [filteredTodos,setFilteredTodos] =useState([]);
    const [searchInputText,setSearchInputText]=useState('');
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todo')))
    },[]);
    useEffect(()=>{
        filterHandler();
        saveTodos();
        Array.from(document.getElementsByClassName('statusBtn')).map((btn)=>{
          return  status === btn.value? btn.classList.add('active'):btn.classList.remove('active')
        })
    },[todos,status]);
    const saveTodos = () => {
        localStorage.setItem('todo',JSON.stringify(todos))
    };

    const filterHandler =() => {
        switch (status) {
            case 'active':
                setFilteredTodos(todos.filter((todo) => todo.isActive));
                break;
            case 'done':
                setFilteredTodos(todos.filter((todo) => !todo.isActive));
                break;
            default:
                setFilteredTodos(todos)
        }
    };
    return (
        <div className='app'>
            <div className='todo-container'>
                <Header todos={todos}/>
                <SearchPanel setStatus={setStatus} status={status} setSearchInputText={setSearchInputText}/>
                {todos ? todos.length === 0 ? <div className='text-center mb-3 border p-3'> Here should be your todo</div> : <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} searchInputText={searchInputText}/> :setTodos([])}
                <AddTodo setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>
            </div>
        </div>
    );
};

export default App;



