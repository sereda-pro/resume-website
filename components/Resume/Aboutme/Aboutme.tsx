import { AboutmeProps } from './Aboutme.props';
import styles from './Aboutme.module.scss';
import cn from 'classnames';
import { Container, Htag } from '../../UI';
import Github from './Github.svg';

export function Aboutme( {className, children, ...props }: AboutmeProps ): JSX.Element {

	return (
		<Container> 
			<div className={styles.aboutme} id="profile" >
				<div className={styles.hello}>
					<h1>Привет, я Александр,<br/> front-end разработчик...</h1>
					<p>Занимаюсь разработкой web-приложений и сайтов на React и Vue, 
						в настоящее время в поисках работы и хорошей команды, если я вас 
						заинтересую буду рад познакомиться и рассказать о себе. 
					</p>
				</div>

				<div className={styles.photo}>
					<img src="/alexander.png" alt="" className={styles.img} />
				</div>

				<div className={styles.contacts}>
					<a href="https://github.com/sereda-pro" target="_blank"><Github /></a>
					<Htag tag='h5' className={styles.htag}>MAIL</Htag>
					<p>alexander@sereda.ru</p>
					<Htag tag='h5' className={styles.htag}>PHONE</Htag>
					<p>+7 (910) 142-91-55</p>
				</div>
			</div>
		</Container>
	);
}