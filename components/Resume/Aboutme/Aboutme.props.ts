import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AboutmeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
