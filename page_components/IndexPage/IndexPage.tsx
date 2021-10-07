import { useEffect, useState } from 'react';
import { Htag, Notification } from '../../components';
import styles from './IndexPage.module.scss';
import { IndexPageProps} from './IndexPage.props';
import cn from 'classnames';
import { SignIn, LogIn } from '../../components';
import { motion, AnimatePresence } from 'framer-motion'; 

export const IndexPage = ({children, ...props}: IndexPageProps) => {

	const [registered, setRegistered] = useState<boolean>(true);
	
	const [notification, setNotification] = useState<string>('');

	const variants = {
		hidden: {
			transform: 'translateY(100%)',
			opacity: 0
		},
		visible: {
			transform: 'translateY(0%)',
			opacity: 1
		}
	};

	useEffect(() => {
		console.log(notification);
		setTimeout(
			() => {setNotification('');},
			10000
		);
	}, [notification !== '']);

	return (
		<>
			<div className={styles.indexPage}>

				<div className={styles.hello}>
					<div className={styles.logo}>
						<Htag tag='h2' className={styles.htag}>sereda<span>.</span>pro</Htag>
					</div>

					<div className={styles.info}></div>

					
						{registered ? 
							<AnimatePresence>
								<motion.div 
									className={styles.info_content}
									initial='hidden'
									animate='visible'
									//exit='hidden'
									transition={{duration: 1.2}}
									variants={variants}
								>
									<span className={styles.emojio}>&#128075;</span>
									<Htag tag='h1' className={styles.htag}>Привет!</Htag>
									<p>Наверное вы тут не случайно?</p>
									<p>Для входа на сайт пожалуйста введите логин и пароль, он должен быть вам известен.</p>
								</motion.div>
							</AnimatePresence> :
							
							<motion.div 
								className={styles.info_content}
								initial='hidden'
								animate='visible'
								//exit='hidden'
								transition={{duration: 1.2}}
								variants={variants}
							>
								<span className={styles.emojio}>&#128563;</span>
								<Htag tag='h1' className={styles.htag}>Неожиданно!</Htag>
								<p>Вы хотите зарегистрироваться?</p>
								<p>Ну тогда добро пожаловать в нашу компанию <span>анонимных алкоголиков</span>.</p>
							</motion.div>
						}
					
				</div>
				
				<div className={styles.login}>

						{registered ? (
							<>
								<LogIn registered={setRegistered} notification={setNotification} />
								<a className={styles.signin} href="#" onClick={(e) => {
									e.preventDefault();
									setRegistered(registered => registered = !registered);
									}}
								>Регистрация</a>
							</>
							
							) : (
								<>
									<SignIn registered={setRegistered} notification={setNotification} />
									<a className={styles.signin} href="#" onClick={(e) => {
										e.preventDefault();
										setRegistered(registered => registered = !registered);
										}}
									>Вход</a>
								</>
							)
						}
				
				</div>
			</div>

			<Notification
				color='red'
				msg={notification}
				setMsg={setNotification}
			>
				<p>К сожалению вам отказано в доступе.</p>
				<p>{notification}</p>
				<p>По возникши вопросам вы можете обратиться в службу технической поддержки пользователей.</p>
			
			</Notification>
		</>
		
	);
};