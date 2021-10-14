import { UpProps } from './Up.props';
import styles from './Up.module.scss';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import Arrow from './Arrow.svg';
import { motion, AnimatePresence } from 'framer-motion';



export function Up( {className, children, ...props }: UpProps ): JSX.Element {

	const [scroll, setScroll] = useState<any>(0);

	const variants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1
		}
	};

	const handleScroll = () => setScroll(window.scrollY);

	const scrollUp = (e: any) => {
		e.preventDefault();
		const element = document.getElementById('header');
		if (element != null) {
			window.scroll({
				left: 0,
				top: element.getBoundingClientRect().y,
				behavior: 'smooth'
			});
		}
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}), [];

	return (
		<>
			{ scroll >= 100 ?
				<AnimatePresence>
				<motion.div 
					className={styles.up} 
					id="UpPage" 
					onClick={(e) => scrollUp(e)}
					initial="hidden"
					animate="visible"
					exit="hidden"
					transition={{duration: 1.3}}
					variants={variants}
				>
					<Arrow />
				</motion.div>
				</AnimatePresence>
			: null
			}
			
		</>
	);
} 