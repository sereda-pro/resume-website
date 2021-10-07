import styles from './TodoPage.module.scss';
import { TodoPageProps } from './TodoPage.props';
import { useState } from 'react';
import { TodoInputField, TodoList } from '../../components';

export const TodoPage = ({children, ...props}: TodoPageProps) => {

	const [text, setText] = useState<string>('');

	return (
		<div className={styles.tasks}>

			<TodoInputField 
				text={text} 
				setText={setText} 
			/>

			<TodoList />
		
		</div>
	);
};