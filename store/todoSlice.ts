import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface ITodo {
	id: string,
	text: string,
	completed: boolean
}

interface ITodosSliseState {
	todos: ITodo[],
}

const initialState: ITodosSliseState = {
	todos: []
};

// export const fetchTodos = createAsyncThunk(
// 	'todos/fetchTodos',
// 	async function () {
// 		//const response = 
		
// 	}
// );

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {

		addTodo(state, action: PayloadAction<string>) {

			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload,
				completed: false
			});
		},

		removeTodo(state, action: PayloadAction<string>) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},

		toggleTodoComplete(state, action: PayloadAction<string>) {
			const toggleTodo = state.todos.find(todo => todo.id === action.payload);
			if (toggleTodo) {
				toggleTodo.completed = !toggleTodo.completed;
			}
		}
	}
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;