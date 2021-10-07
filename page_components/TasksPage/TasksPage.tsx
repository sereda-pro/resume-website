import styles from './TasksPage.module.scss';
import { TasksPageProps } from './TasksPage.props';
import { useState } from 'react';
import { TodoInputField, TodoList } from '../../components';

export const TasksPage = ({children, ...props}: TasksPageProps) => {

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