import { ResumeProps } from './Resume.props';
import styles from './Resume.module.scss';
import cn from 'classnames';
//import { Htag } from '../UI';
import { Header } from './Header/Header';
import { Aboutme } from './Aboutme/Aboutme';
import { Skils } from './Skils/Skils';
import { SoftSkils } from './SoftSkils/SoftSkils';
import { Education } from './Education/Education';
import { Up } from './Up/Up';

export function Resume( {className, children, ...props }: ResumeProps ): JSX.Element {

	
	
	return (
		<div className={styles.resume}>
			
			<Header />
			<Aboutme />
			<Skils />
			<SoftSkils />
			<Education />
			<Up />

		</div>
		
	);
}