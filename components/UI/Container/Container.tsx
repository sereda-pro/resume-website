import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';
import cn from 'classnames';

export function Container( {id, children, className, ...props}: ContainerProps): JSX.Element {
	
	return (
		<div 
			className={cn(className, styles.container)}
			id={id} 
		>
			{children}
		</div>
	);
}