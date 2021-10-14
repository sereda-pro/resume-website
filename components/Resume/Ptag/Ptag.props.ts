import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	el: string,
	key: number,
	
}
