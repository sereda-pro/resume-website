//import { EAuthProps } from './EAuth.props';
import styles from './EAuth.module.scss';
import cn from 'classnames';
import { Htag } from '../UI';



export function EAuth(): JSX.Element {

	return (
		<div className={styles.eAuth}>
			

			<div className={styles.msg_wrap}>
				<div className={styles.emojio}>&#128533;</div>
				<Htag tag='h2' className={styles.msg}>
					К сожалению вы не авторизованы.
				</Htag>
				<p>Сейчас вы будуте перенаправлены на страницу авторизации.</p>
			</div> 

		</div>
		
	);
}