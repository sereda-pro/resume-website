import { LogInProps, IFormLogIn } from './LogIn.props';
import styles from './LogIn.module.scss';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input, Htag, Button } from '..';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authUser, autoLogin } from '../../store/authSlice';
import { useRouter } from 'next/router';


export function LogIn( {registered, notification, className, children, ...props }: LogInProps ): JSX.Element {

	const router = useRouter();
	const dispatch = useAppDispatch();
	const token = useAppSelector(state => state.auth.token);

	useEffect(() => {
		dispatch(autoLogin());
	});

	useEffect(() => {
		if (token) {
			router.push('/devResume');
		}
	}, [token]);
	
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IFormLogIn>();

	const variants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1
		}
	};

	const onSubmit = (formData: IFormLogIn) => {
		const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true,
			isLogin: true,
		};
		dispatch(authUser(authData));
	};
	
	return (
		<AnimatePresence>
			<motion.div 
				className={styles.form}
				initial='hidden'
				animate='visible'
				exit='hidden'
				transition={{duration: 1.5}}
				variants={variants}
			>
				<Htag tag='h4' className={styles.htag}>LogIn</Htag>

				<form 
					onSubmit={handleSubmit(onSubmit)}
					autoComplete="off"
				>

						<Input 
							type="text"
							className={styles.input}
							label="E-mail"
							{...register(
									"email", {
										required: {
										value: true,
										message: "Введите e-mail"
										}
									}
								)
							}
							error={errors.email}
						/>
					
						<Input 
							type="password"  
							className={styles.input}
							label="Password"
							{...register(
									"password", {
										required: {
										value: true,
										message: "Введите ваш пароль"
										}
									}
								)
							}
							error={errors.password}
						/>
					
					<Button type='submit' appearence='primary' arrow='none' className={styles.btn}>Войти</Button>
				
				</form>
			</motion.div>
		</AnimatePresence>
	);
}