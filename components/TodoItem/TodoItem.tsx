import { TodoItemProps } from './TodoItem.props';
import styles from './TodoItem.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { deteleTodo, toggleStatus } from '../../store/todoSlice';


export function TodoItem( {className, children, ...props }: TodoItemProps ): JSX.Element {

	const todos = useAppSelector(state => state.todos.todos);
	//console.log(todos);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.todoItem}>
			{todos && todos.map((todo) => 
				<li key={todo.id}>
					<input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleStatus({id: todo.id}))}/>
					<span>{todo.title}</span>
					<span className={styles.delete} onClick={() => dispatch(deteleTodo({id: todo.id}))}>&times;</span>
				</li>
			)}
		</div>
	);
}