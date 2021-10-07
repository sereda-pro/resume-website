import { TodoListProps } from './TodoList.props';
import styles from './TodoList.module.scss';
import { TodoItem } from '../TodoItem/TodoItem';


export function TodoList( {className, children, ...props }: TodoListProps ): JSX.Element {

	return (
		<div className={styles.todoList}>
			<ul>
				<TodoItem />
			</ul>
		</div>
	);
}