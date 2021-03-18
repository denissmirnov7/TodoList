// import React from 'react';
//
//
// const Header = ({todos}) => {
//     return (
//         <header className='header'>
//             <h1 className="header__title">Todo-List</h1>
//             <h2 className="header__status-bar">
//                 {todos.filter(el=>el.isActive).length} more to do,{todos.filter(el=>el.isActive).length} done
//             </h2>
//         </header>
//     );
// };
//
// export default Header;


import React from 'react';

const Header = ({todos}) => {
    return (
        <header className='header'>
            <h1 className="header__title">Todo-List</h1>
            <h2 className='header__status-bar'>
                {todos ? todos.filter(el=>el.isActive).length : 0} more to do,{todos ? todos.filter(el=>el.isActive).length : 0}done
            </h2>

        </header>
    );
};

export default Header;
