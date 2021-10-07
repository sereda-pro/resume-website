import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SignInProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode,
	registered: (registered: boolean) => void;
	notification?: (msg: string) => void;
}

export interface IFormSignIn {
	name: string,
	email: string,
	password: string,
	password2: string,
}

export interface ISendFormSignIn {
	message: string,
}

