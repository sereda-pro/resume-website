import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';

interface ITodo {
	id: string,
	title: string,
	completed: boolean
}

interface ITodosSliseState {
	todos: ITodo[],
	status: string | null,
	error: string | null,
}

const initialState: ITodosSliseState = {
	todos: [],
	status: null,
	error: null,
	
};

export const fetchTodos = createAsyncThunk(
	'todos/fetchTodos',
	async function (_, {rejectWithValue}) {

		try {
			const response = await axios({
				method: 'GET',
				url: 'https://jsonplaceholder.typicode.com/todos?_limit=10'
			});

			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					console.log(error.response);
					return rejectWithValue(error.message);
				} else {
					console.log(error.request);
					return rejectWithValue(error.message);
				}
			} else {
				console.log((error as Error).message);
				return rejectWithValue((error as Error).message);
			}
		}
		
	}
);

export const deteleTodo = createAsyncThunk(
	'todos/deleteTodo',
	async function (id: {id: string}, {rejectWithValue, dispatch}) {
		try {
			const response = await axios({
				method: 'DELETE',
				url: `https://jsonplaceholder.typicode.com/todos/${id}`,

			});

			dispatch(removeTodo(id));
			//return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					console.log(error.response);
					return rejectWithValue(error.message);
				} else {
					console.log(error.request);
					return rejectWithValue(error.message);
				}
			} else {
				console.log((error as Error).message);
				return rejectWithValue((error as Error).message);
			}
		}
	}
);

export const toggleStatus = createAsyncThunk(
	'todos/toggleStatus',
	async function ({id}: {id: string}, {rejectWithValue, dispatch, getState}) {
		const todo: ITodo = (getState() as any).todos.todos.find((todo: ITodo) => todo.id === id);

		try {
			const response = await axios({
				method: 'PATCH',
				url: `https://jsonplaceholder.typicode.com/todos/${id}`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					completed: !todo.completed,
				})

			});

			dispatch(toggleTodoComplete({id: id}));
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					console.log(error.response);
					return rejectWithValue(error.message);
				} else {
					console.log(error.request);
					return rejectWithValue(error.message);
				}
			} else {
				console.log((error as Error).message);
				return rejectWithValue((error as Error).message);
			}
		}
	}
);

export const addNewTodo = createAsyncThunk(
	'todos/addNewTodo',
	async function ({title}: {title: string}, {rejectWithValue, dispatch}) {

		try {
			const response = await axios({
				method: 'POST',
				url: `https://jsonplaceholder.typicode.com/todos/`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify({
					id: new Date().toISOString(),
					title: title,
					completed: false
				})

			});

			dispatch(addTodo(response.data));
			//return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					return rejectWithValue(error.message);
				} else {
					return rejectWithValue(error.message);
				}
			} else {
				return rejectWithValue((error as Error).message);
			}
		}
	}
);


const todoSlice = createSlice({
	name: 'todos',
	initialState,

	reducers: {
		addTodo(state, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action: PayloadAction<{id: string}>) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
		},
		toggleTodoComplete(state, action: PayloadAction<{id: string}>) {
			const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
			if (toggleTodo) {
				toggleTodo.completed = !toggleTodo.completed;
			}
		}
	},

	extraReducers: (builder) => builder
		.addCase(fetchTodos.pending, (state: ITodosSliseState) => {
			state.status = 'loading';
			state.error = 'null';
		})
		.addCase(fetchTodos.fulfilled, (state: ITodosSliseState, action: any) => {
			state.status = 'resolved';
			state.todos = action.payload;
		})
		.addCase (fetchTodos.rejected, (state: ITodosSliseState, action: any) => {
			state.status = 'rejected';
			state.error = action.payload;
		})
		.addCase (deteleTodo.rejected, (state: ITodosSliseState, action: any) => {
			state.status = 'rejected';
			state.error = action.payload;
		})
		.addCase (toggleStatus.rejected, (state: ITodosSliseState, action: any) => {
			state.status = 'rejected';
			state.error = action.payload;
		})

});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;