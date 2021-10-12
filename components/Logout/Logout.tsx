import { LogoutProps} from './Logout.props';
import styles from './Logout.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { logout } from '../../store/authSlice';

export function Logout( { className, children, ...props }: LogoutProps ): JSX.Element {

	const dispatch = useAppDispatch();

	const exit = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('expirationDate');
		dispatch(logout());
		
	};
	
	return (
		<button onClick={exit}>Выход</button>
	);
}