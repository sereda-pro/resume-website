import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import ArrowIcon from './Arrow.svg';

export function Button( {appearence='primary', arrow='none', children, className, ...props}: ButtonProps ): JSX.Element {

	return (
		<button 
			className={cn(styles.button, className, {
				[styles.primary]: appearence == 'primary',
				[styles.secondary]: appearence == 'secondary',
				[styles.ghost]: appearence == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && 
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
					})}
				>
					{/* //<ArrowIcon /> */}
				</span>
			}
		</ button>
	);
}