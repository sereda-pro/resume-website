import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface EducationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
}
