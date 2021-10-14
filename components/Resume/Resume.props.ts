import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ResumeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
