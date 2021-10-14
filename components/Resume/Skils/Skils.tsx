import { SkilsProps } from './Skils.props';
import styles from './Skils.module.scss';
//import cn from 'classnames';
import { Container, Htag } from '../../UI';
import { Tag } from '../Tag/Tag';

export function Skils( {className, children, ...props }: SkilsProps ): JSX.Element {
	
	const listSkils = ['HTML/CSS(SASS, LESS)/JS', 'React.js', 'React Hooks', 'Redux', 'Next.js', 'Vue.js', 'Python', 'Rust',
		'MySQL', 'MongoDB',	'Docker', 'Git', 'Linux', 'Bash', 'Figma'];

	return (
		<Container> 
			<div className={styles.skils} id="skils" onScroll={() => {console.log('scroll...')}} >
				<div className={styles.title}>
					<h1>Опыт работы</h1>
					<Tag list={listSkils} id="skils" />
				</div>

				<div className={styles.info}>
					<div className={styles.story}>
						<p>Опыт пока не большой, около года.</p>
						<p>И да, я мог бы рассказать вам про фриланс и <mark>БОЛЬШОЙ</mark> опыт работы, но вы же вероятно не за этим сюда пришли?</p>
						<p>Поэтому предоагаю сэкономить ваше и мое время.</p>
						<p>Я специально подготовил небольшое web-приожение (сайт-резюме) с авторизацией, 
							о котором ниже имеется небольшое описание как и с помощью чего оно разработано.</p>
					</div>

					<div className={styles.skils_app}>

						<div className={styles.skils_app_item}>
							<div className={styles.tech}>
								<Htag tag='h3' className={styles.htag}>Next.js</Htag>
							</div>
							<div className={styles.arrow}></div>
							<div className={styles.description}>
								<p>
									В качестве основы был использован <mark>Next.js</mark> - 
									фреймворк, основанный на React. В общем-то все тоже самле, что и в Create-React-App, но как мне показалось 
									чуть более удобнее за счет функции рендеринга на стороне сервера (SSR) и статической генерация страниц (SSG).
									Кроме того не нужно настраивать React Router, все как говорится из коробки. 
								</p>	
							</div>
						</div>

						<div className={styles.skils_app_item}>
							<div className={styles.tech}>
								<Htag tag='h3' className={styles.htag}>React TypeScript</Htag>
							</div>
							<div className={styles.arrow}></div>
							<div className={styles.description}>
								<p>
									Само собой все написано на <mark>React и TypeScript</mark>, использованы функциональные компоненты, <mark>React Hooks</mark> 
									(useState, useEffect, useContext и др.), некоторые хуки Next.js.  
								</p>
								<p>Для работы с формами (на станице авторизации) использовал <mark>React Hook Form</mark>, для анимации <mark>Framer motion</mark></p>	
								<p>Дмумаю про HTML, CSS (обычно использую препроцессор SASS) рассказывать не нужно, другого все равно не дано.
								</p>
							</div>
						</div>

						<div className={styles.skils_app_item}>
							<div className={styles.tech}>
								<Htag tag='h3' className={styles.htag}>Redux Toolkit</Htag>
							</div>
							<div className={styles.arrow}></div>
							<div className={styles.description}>
								<p>
									Для хранени Store использован <mark>Redux Toolkit</mark>, для асинхронных запросов и изменению <mark>createAsyncThunk</mark> 
									(сами запросы отправляются с помощью <mark>axios</mark>).  
								</p>
								<p> 
									В качестве дополнительного примера по ссылке подготовлен стандартный <a href="/todo">Todo-list</a>, данные в который асинхонно подгружаются из JSONPlaceholder и туда и туда же также отправляются ...
								</p>	
							</div>
						</div>

						<div className={styles.skils_app_item}>
							<div className={styles.tech}>
								<Htag tag='h3' className={styles.htag}>BackEnd</Htag>
							</div>
							<div className={styles.arrow}></div>
							<div className={styles.description}>
								<p>
									В качетве "бэка" для авторизации и хранения некоторых данных использовал <mark>FireBase от Google</mark>,
									но думаю вскоре заменю своим на Node.js, а лучше наверное на Nest.js + MongoDB.  
								</p>	
							</div>
						</div>

						<div className={styles.skils_app_item}>
							<div className={styles.tech}>
								<Htag tag='h3' className={styles.htag}>Docker</Htag>
							</div>
							<div className={styles.description}>
								<p>
									То, что получилось запушил  <mark>GitHub</mark>, упаковал в <mark>Docker</mark>, и залил на <mark>VPS</mark> (VPS взял у Reg.ru).  
								</p>	
							</div>
						</div>
					</div>

					<div className={styles.description2}>
						<p>Много букв получилось, в резюме столько наверное не пишут. В общем, звоните и пишите, буду рад познакомиться и ответить на вопросы.</p> 
						<p>В качетве завершения, немного дополню... кроме <mark>JavаScript (TypeScript)</mark> знаком и имел небольшой опыт работы в учебных проектах с
						<mark>Python</mark> (вообще по Python осилил полностью прочитать и прорешать M.Лутца), <mark>Rust</mark> (также прочитал и прорешал весь Rust Book), поэтому 
						статически-типизированные для меня не что-то космическое, ну и к слову Rust и TypeScript как мне показалось очень по синтаксису похожи. 
						Дополнительно знаком с <mark>UML</mark> диаграммами, со	спецификой web-разработки, вёрсткой под различные браузеры, есть опыт написания unit-тестов.
						Умею работать с Figma.
						</p>
					</div>					
				</div>
			</div>
		</Container>
	);
}