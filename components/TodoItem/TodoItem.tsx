import { TodoItemProps } from './TodoItem.props';
import styles from './TodoItem.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { toggleTodoComplete, removeTodo } from '../../store/todoSlice';


export function TodoItem( {className, children, ...props }: TodoItemProps ): JSX.Element {

	const todos = useAppSelector(state => state.todos.todos);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.todoItem}>
			{todos.map((todo) => 
				<li key={todo.id}>
					<input type="checkbox" onChange={() => dispatch(toggleTodoComplete(todo.id))}/>
					<span>{todo.text}</span>
					<span className={styles.delete} onClick={() => dispatch(removeTodo(todo.id))}>&times;</span>
				</li>
			)}
		</div>
	);
}