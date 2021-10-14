import { SkilsProps } from './Skils.props';
import styles from './Skils.module.scss';
//import cn from 'classnames';
import { Container, Htag } from '../../UI';
import { Tag } from '../Tag/Tag';
import { tech } from './data';
import parse from 'html-react-parser';

export function Skils( {className, children, ...props }: SkilsProps ): JSX.Element {
	
	const listSkils = ['HTML/CSS(SASS, LESS)/JS', 'React.js', 'React Hooks', 'Redux', 'Next.js', 'Vue.js', 'Python', 'Rust',
		'MySQL', 'MongoDB',	'Docker', 'Git', 'Linux', 'Bash', 'Figma'];

	const listTech = tech.map((item, i) => {
		
		const description = item.description.map((el, j) => {
			return (
				<p key={j}>
					{parse(el)}
				</p>
			);
		});

		return (
			<div key={i} className={styles.skils_app_item}>
				<div className={styles.tech}>
					<Htag tag='h3' className={styles.htag}>{item.title}</Htag>
				</div>
				{item.line ? <div className={styles.arrow}></div> : null}
				<div className={styles.description}>
					{description}
				</div>
			</div>
		);
	});

	return (
		<Container> 
			<div className={styles.skils} id="skils" onScroll={() => {console.log('scroll...')}} >
				<div className={styles.title}>
					<h1>Опыт работы</h1>
					<Tag list={listSkils} id="skils" />
				</div>

				<div className={styles.info}>
					<div className={styles.story}>
						<h2>Опыт = знание + умение + желание</h2>
						<p>Практический опыт работы около года. Вероятно можно было бы прибавить и написать много букв про 
							<mark>БОЛЬШОЙ</mark> опыт, но лучше один раз показать чем рассказывать.</p>
						<p>Не будем тратить время... я специально подготовил небольшое web-приожение (мой сайт-резюме), 
							о разработке которого ниже чуть подробнее расскажу, а заодно про стек с которым работал.</p>
					</div>

					<div className={styles.skils_app}>
						{listTech}
					</div>

					<div className={styles.story}>
						<h2>А что кроме React?</h2>
						<p>По мимо <mark>JavаScript (TypeScript) & React</mark> работал с <mark>Vue.js</mark>, <mark>Svelte.js</mark>. 
						Изучал и работал в учебных проектах с <mark>Python</mark> и веб-фрейворками Django и Flask.
						Из статически типизированых языков знаком с <mark>Rust</mark>, поэтому статическая-типизация и компиляция для меня 
						не что-то космическое, ну и к слову Rust и TypeScript как мне показалось очень по синтаксису похожи. 
						Дополнительно знаком с языком моделирования <mark>UML</mark>, работал с Figma, есть опыт написания unit-тестов.
						</p>
					</div>					
				</div>
			</div>
		</Container>
	);
}