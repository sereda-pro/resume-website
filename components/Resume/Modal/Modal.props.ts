import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';



export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	modalActive: {
		modal: boolean, 
		src: string,
	},
	setModalActive: ({
		modal: boolean, 
		src: string,
	}) => void,
}