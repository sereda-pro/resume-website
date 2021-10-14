import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import { Htag } from '../../UI';
import { useEffect, useState } from 'react';
import { Button, Container } from '../../UI';
import Icon_exit from './Icon_exit.svg';
import { useAppDispatch } from '../../../store/hooks';
import { logout } from '../../../store/authSlice';
import { useRouter } from 'next/router';

export function Header( {className, children, ...props }: HeaderProps ): JSX.Element {

	const [anchor, setAnchor] = useState<string>('');
	const nav = [
		{title: 'Обо мне', link: '#', anchor: 'profile'},
		{title: 'Skils', link: '#', anchor: 'skils'},
		{title: 'Soft skills', link: '#', anchor: 'softskills'},
		{title: 'Образование', link: '#', anchor: 'education'},
	];

	const router = useRouter();
	const dispatch = useAppDispatch();

	const exit = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('expirationDate');
		//router.push('/devResume');
		dispatch(logout());

		setTimeout(() => router.push('/'), 300);
		
		
	};
	
	useEffect(() => {
		const element = document.getElementById(anchor);
		if (element != null) {
			window.scroll({
				left: 0,
				top: element.getBoundingClientRect().y,
				behavior: 'smooth'
			});
		}
	}, [anchor]);

	const handlerOnClickAnchor = (e: any, anchor: string) => {
		e.preventDefault();
		setAnchor(anchor);
	};

	const navigation = nav.map((item, i) => {
		return (
			<a 
				href={item.link} 
				className={styles.nav_link} 
				key={i}
				onClick = {(e) => {
					handlerOnClickAnchor(e, item.anchor);
				}}
			>
				{item.title}
			</a>
		);
	});
	
	
	return (
		<Container> 
		<div className={styles.header} id="header">
			
			<div className={styles.logo}>
				<Htag tag='h2' className={styles.htag}>sereda<span>.</span>pro</Htag>
			</div>

			<div className={styles.nav}>
				{navigation}
			</div>
			
			
			<div className={styles.logout} onClick={exit}>
				<Icon_exit className={styles.icon} />
			</div>
			
			
		</div>
		</Container>
	);
}