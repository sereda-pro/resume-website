import { SignInProps, IFormSignIn, ISendFormSignIn } from './SignIn.props';
import styles from './SignIn.module.scss';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input, Htag, Button } from '../../components';
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export function SignIn( { registered, notification, className, children, ...props }: SignInProps ): JSX.Element {


	
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IFormSignIn>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);

	const variants = {
		hidden: {
			//transform: 'translateX(100%)',
			opacity: 0
		},
		visible: {
			//transform: 'translateX(0%)',
			opacity: 1
		}
	};

	const onSubmit = async (formData: IFormSignIn) => {
		
		const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true
		};

		try {
			const { data } = await axios.post(process.env.NEXT_PUBLIC_DB_SIGNUP, authData);
			if (data) {
				console.log(data);
				setIsSuccess(true);
				reset();
			} else {
				notification && notification('Что-то пошло не так...');
			}
		} catch (e) {
			console.log(e);
		}
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
				<Htag tag='h4' className={styles.htag}>SignIn</Htag>

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