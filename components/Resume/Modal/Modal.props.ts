import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface IModal {
	modal: boolean, 
	src: string,
}

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	modalActive: IModal,
	setModalActive: (obj: IModal) => void,
}