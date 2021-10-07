import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface LogInProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	registered: (registered: boolean) => void;
	notification?: (msg: string) => void;
}

export interface IFormLogIn {
	email: string,
	password: string,
}

export interface ISendFormLogIn {
	message: string,
}
