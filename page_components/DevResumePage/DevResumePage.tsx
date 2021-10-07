import styles from './DevResumePage.module.scss';
import { DevResumePageProps } from './DevResumePage.props';
import axios from 'axios';


export const DevResumePage = ({children, ...props}: DevResumePageProps) => {

	axios.get('https://app-law-society-default-rtdb.europe-west1.firebasedatabase.app/contactus.json').
		then((response) => console.log(response));

	return (
		<div className={styles.devResume}>
			Список заявок
		</div>
	);
};