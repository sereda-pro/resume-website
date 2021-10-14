import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';



export function Ptag( {el, key, className, children, ...props }: PtagProps ): JSX.Element {

	const listVariants = {
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.3,
				type: 'tween',
				ease: 'easeOut'
			}
		}),
		hidden: {
			opacity: 0,
			y: 100,
		}
	};

	const tagList = list.map((item, i) => {
		return (
			<motion.li 
				className={styles.li}
				key={i}
				variants={listVariants}
				initial='hidden'
				animate='visible'
				custom={i}
			>
				{item}
			</motion.li>
		);
	});

	const [start, setStart] = useState<boolean>(false);
	let element: any = null;
	let innerHeight: number;

	const handleScroll = () => {
		const el = element.getBoundingClientRect();
		if (el.y <= (innerHeight / 2.5)) {
			setStart(true);
		}
	};

	useEffect(() => {
		element = document.getElementById(id);
		window.addEventListener('scroll', handleScroll);
		innerHeight = window.innerHeight;

	});


	return (
		// <>
		// 	{ start ? <ul>{tagList}</ul>: null}
		// </>
		<>
			{ start ? <p key={key}>{parse(el)}</p>: null}
		</>
		// <p key={key}>
		// 	{parse(el)}
		// </p>
	);
} 