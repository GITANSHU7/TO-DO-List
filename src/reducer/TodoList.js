import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
        state.push(action.payload);
        },

        // list todos
        removeTodo: (state, action) => {
       const {id} = action.payload;
       const uu = state.filter(todo => todo.id !== id);
       if (uu) {
           return state.filter(f => f.id !== id);
        }

    },
    

        // update todos
        // updateTodo: (state, action) => {
        // return state.map(todo =>
        //     todo.id === action.payload.id ? action.payload : todo
        // );
        // }
        // list all todos
        // listTodos: (state, action) => {
        // return state;
        // }

//updatetodo
updateTodo: (state, action) => {
    const { id, title, description } = action.payload;
    const todo = state.find(todo => todo.id === id);
    if (todo) {
        todo.title = title;
        todo.description = description;
    }
},
// editToDo:(state,action)=>{
// }
    }
    
    });

export const { addTodo, removeTodo, updateTodo, listTodos } = todoSlice.actions;

export default todoSlice.reducer;