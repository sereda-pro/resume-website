import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	children: ReactNode;
	appearence?: 'primary' | 'secondary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
}