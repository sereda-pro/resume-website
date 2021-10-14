//import styles from './DevResumePage.module.scss';
import { DevResumePageProps } from './DevResumePage.props';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { autoLogin } from '../../store/authSlice';
import { Logout } from '../../components';
import { EAuth, Resume  } from '../../components';


export const DevResumePage = ({children, ...props}: DevResumePageProps) => {

	const router = useRouter();
	const dispatch = useAppDispatch();
	dispatch(autoLogin());
	const token = useAppSelector(state => state.auth.token);
	const [authorized, setAuthorized] = useState<string | null>(null);

	useEffect(() => {
		if (!token) {
			//console.log('переход на главную страницу');
			setTimeout(() => router.push('/'), 5000);
		} else {
			setAuthorized(token);
		}	
	}, [token]);

	return (
		<>
			{authorized ? <Resume /> : <EAuth />}
		</>
	);
};