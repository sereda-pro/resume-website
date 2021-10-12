import styles from './DevResumePage.module.scss';
import { DevResumePageProps } from './DevResumePage.props';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { autoLogin } from '../../store/authSlice';
import { Logout } from '../../components';


export const DevResumePage = ({children, ...props}: DevResumePageProps) => {

	const router = useRouter();
	const dispatch = useAppDispatch();
	dispatch(autoLogin());
	const token = useAppSelector(state => state.auth.token);
	useEffect(() => {
		if (!token) {
			console.log('переход на главную страницу');
			setTimeout(() => router.push('/'), 2000);
		}	
	}, [token]);

	return (
		<>
			{token ? 
				<div className={styles.devResume}>
					Резюме
					<Logout />
				</div>  
			: 
				<h1>Пока</h1>
			}

		</>
	);
};