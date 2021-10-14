import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	list: string[];
	id: string;
}
