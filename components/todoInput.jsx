import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const TodoInput = () => {
    const [todo, setTodo] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post("/api/todo", { todo });
            toast.success(res.data.msg);
            window.location.reload();
            setTodo("");
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    };

    return (
        <div className='container d-flex flex-column'>
            <h2 className='text-center text-secondary mt-4'>Todo List</h2>

            <form
                onSubmit={handleSubmit}
                className='input-group mt-4 mb-5 w-50 m-auto'
            >
                <input
                    type='text'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    className='form-control shadow-ms'
                />
                <button type='submit' className='btn btn-dark ms-2 shadow-ms'>
                    Post
                </button>
            </form>
        </div>
    );
};

export default TodoInput;

TodoInput;
