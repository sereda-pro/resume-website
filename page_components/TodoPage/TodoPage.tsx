import styles from './TodoPage.module.scss';
import { TodoPageProps } from './TodoPage.props';
import { useState, useEffect } from 'react';
import { TodoInputField, TodoList } from '../../components';
import { fetchTodos } from '../../store/todoSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


export const TodoPage = ({children, ...props}: TodoPageProps) => {

	const [text, setText] = useState<string>('');
	const dispatch = useAppDispatch();
	const { status, error } = useAppSelector(state => state.todos);

	useEffect(() => {
		//console.log('TodoPage start frtchTodos');
		dispatch(fetchTodos());
		
	}, [dispatch]);

	return (
		<div className={styles.todo}>

			<TodoInputField 
				text={text} 
				setText={setText} 
			/>

			{status === 'loading' && <h2>Loading ...</h2>}
			{status === 'rejected' && <h2>Извините, возникла непредвиденная ошибка: {error}</h2>}

			<TodoList />
		
		</div>
	);
};