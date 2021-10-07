import { NotificationProps } from './Notification.props';
import styles from './Notification.module.scss';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import IconClose from './Icon-close.svg';

export function Notification( { color, msg, setMsg, className, children, ...props }: NotificationProps ): JSX.Element {

	const variants = {
		hidden: {transform: 'translateX(110%)'},
		visible: {transform: 'translateX(0%)'}
	};

	return (
		<AnimatePresence>
			{msg != '' && 
				<motion.div 
					className={cn(styles.notification, {
						[styles.red]: color=='red',
						[styles.yellow]: color=='yellow',
						[styles.grin]: color=='grin',
						[styles.grey]: color=='grey'
					})}
					initial='hidden'
					animate='visible'
					exit='hidden'
					transition={{duration: 0.7}}
					variants={variants}
					
				>
					<div className={styles.close} onClick={() => setMsg('')}><IconClose /></div>
					{children}
				</motion.div>
			}
		</AnimatePresence>
	);
}