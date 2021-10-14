import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface UpProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
