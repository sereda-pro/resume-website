import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TodoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	children?: ReactNode,
}


