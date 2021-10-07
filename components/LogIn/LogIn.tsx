import { LogInProps, IFormLogIn, ISendFormLogIn } from './LogIn.props';
import styles from './LogIn.module.scss';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Input, Htag, Button } from '..';
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; 


export function LogIn( {registered, notification, className, children, ...props }: LogInProps ): JSX.Element {


	//const [signIn, setSignIn] = useState<string>('login');
	const { register, handleSubmit, formState: {errors}, reset } = useForm<IFormLogIn>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	//const [error, setIsError] = useState<string>('');

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

	const onSubmit = async (formData: IFormLogIn) => {
		
		const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true
		};

		try {
			const { data } = await axios.post(
				process.env.NEXT_PUBLIC_DB_LOGIN,
				authData);
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
				<Htag tag='h4' className={styles.htag}>LogIn</Htag>

				<form 
					onSubmit={handleSubmit(onSubmit)}
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