import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SkilsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
