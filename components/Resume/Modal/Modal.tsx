import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';
import cn from 'classnames';

export function Modal( {modalActive, setModalActive, children}: ModalProps): JSX.Element {

	const {modal, src} = modalActive;
	
	return (
		<div 
			className={cn( styles.modal, {
				[styles.active]: modal === true,
			})} 
			onClick={() => setModalActive({
				modal: false, 
				src: ""
			})}
		>
			<div 
				className={cn( styles.modal_content, {
					[styles.active]: modal === true,
				})}  
				onClick={(e) => e.stopPropagation()}
			>
				{src ? 
					<img 
						src={src} 
						alt="Сертификат о прохождении курса"
						className={styles.img_modal} 
					/>
				: null}
			</div>
		</div>
	);
}