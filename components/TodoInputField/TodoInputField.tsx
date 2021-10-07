import { TodoInputFieldProps } from './TodoInputField.props';
import styles from './TodoInputField.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../store/todoSlice';

export function TodoInputField( { text, setText,  className, children, ...props }: TodoInputFieldProps ): JSX.Element {

	const dispatch = useAppDispatch();

	return (
		<div className={styles.todoInputField}>
			<label>
				<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
				<button  
					className={styles.btn} 
					onClick={() => {
						dispatch(addTodo(text));
						setText('');
					}}
				>Добавить запись</button> 
			</label>
		</div>
	);
}