import React from "react";

const TodoItem = ({ todo }) => {
    console.log(todo);
    return (
        <div className='container w-25'>
            <div className='text-center border shadow my-3 p-2 rounded text-capitalize'>
                {todo.name}
            </div>
        </div>
    );
};

export default TodoItem;
