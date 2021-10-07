import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore ({
	reducer: {
		todos: todoReducer,
	}

}); 

// Вывести типы `RootState` и `AppDispatch` из хранилища (store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;