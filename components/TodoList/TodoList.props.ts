import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TodoListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}