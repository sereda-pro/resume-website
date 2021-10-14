import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface EAuthProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
