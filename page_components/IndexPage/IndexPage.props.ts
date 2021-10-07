import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IndexPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children?: ReactNode;
}

export interface IFormLogIn {
	user: string;
	password: string;
}

export interface ISendFormLogIn {
	message: string,
}

