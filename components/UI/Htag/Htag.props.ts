import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
	children: ReactNode;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}