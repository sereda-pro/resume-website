import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
	color?: 'red' | 'yellow' | 'grin' | 'grey',
	msg: string,
	setMsg: (msg: string) => void
}