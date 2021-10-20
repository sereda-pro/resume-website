import { SignInProps, IFormSignIn, ISendFormSignIn } from './SignIn.props';
import styles from './SignIn.module.scss';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input, Htag, Button } from '../../components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authUser } from '../../store/authSlice'; 
import { useRouter } from 'next/router';

export function SignIn( { registered, notification, className, children, ...props }: SignInProps ): JSX.Element {

	const router = useRouter();
	const dispatch = useAppDispatch();
	const token = useAppSelector(state => state.auth.token);

	useEffect(() => {
		if (token) {
			router.push('/devResume');
		}
	}, [token]);
	
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IFormSignIn>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const variants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1
		}
	};

	const onSubmit = (formData: IFormSignIn) => {
		
		const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true,
			isLogin: false,
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
				<Htag tag='h4' className={styles.htag}>SignUp</Htag>

				<form onSubmit={handleSubmit(onSubmit)}>

					<Input 
						label="Your name"
						className={styles.input}
						{...register(
								'name', {
									required: {
									value: true,
									message: 'Укажите ваше ФИО или имя'
									}
								}
							)
						}
						error={errors.name}
					/>
					
					<Input 
						label="E-mail"
						className={styles.input}
						{...register(
								'email', {
									required: {
									value: true,
									message: 'Введите ваш e-mail'
									}
								}
							)
						}
						error={errors.email}
					/>
					
					<Input 
						type='password' 
						label="Password"
						className={styles.input}
						{...register(
								'password', {
									required: {
									value: true,
									message: 'Введите ваш пароль'
									}
								}
							)
						}
						error={errors.password}
					/>
					
					<Input 
						type='password' 
						label="Repeat the password"
						className={styles.input}
						{...register(
								'password2', {
									required: {
									value: true,
									message: 'Введите ваш пароль еще раз'
									}
								}
							)
						}
						error={errors.password}
					/>
					

					<Button type='submit' appearence='primary' arrow='none' className={styles.btn}>Регистрация</Button>
				</form>
			</motion.div>
		</AnimatePresence>
	);
}