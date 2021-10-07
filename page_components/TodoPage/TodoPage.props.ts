import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TodoPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children?: ReactNode;
}

