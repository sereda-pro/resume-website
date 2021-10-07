import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(({label, className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement> ): JSX.Element => {
		
		return (
			<div className={styles.inputComponent}>
				<label className={styles.input_label}> 
					<div>
						<input
							placeholder=" " 
							className={cn(styles.input, className, {
								[styles.errorInput]: error
							})} 
							ref={ref} 
							{...props}
						/>
						<span>{label && label}</span>
					</div>
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		);
	}
);