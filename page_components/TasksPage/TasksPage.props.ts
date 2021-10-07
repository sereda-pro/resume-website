import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TasksPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children?: ReactNode;
}

