import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TodoInputFieldProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	children?: ReactNode,
	text: string,
	setText: (text: string) => void;
}

