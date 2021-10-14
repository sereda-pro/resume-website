export const tech = [
	{
		title: 'Next.js',
		description: [
			`В качестве основы был использован <mark>Next.js</mark> - 
			фреймворк, основанный на React. В общем-то все тоже самле, 
			что и в Create-React-App, но как мне показалось чуть более 
			удобнее за счет функции рендеринга на стороне сервера (SSR) 
			и статической генерация страниц (SSG). Кроме того не нужно 
			настраивать React Router, все как говорится из коробки.`
		],
		line: true
	},
	{
		title: 'React + TypeScript',
		description: [
			`Само собой все написано на <mark>React и TypeScript</mark>, 
			использованы функциональные компоненты, <mark>React Hooks</mark> 
			(useState, useEffect, useContext и др.), некоторые хуки Next.js.`,

			`Для работы с формами (на станице авторизации) использовал 
			<mark>React Hook Form</mark>, для анимации <mark>Framer motion</mark>`,
			
			`Дмумаю про HTML, CSS (обычно использую препроцессор SASS) рассказывать 
			не нужно, другого все равно не дано.`
		],
		line: true
	},
	{
		title: 'Redux toolkit',
		description: [
			`Для хранени Store использован <mark>Redux Toolkit</mark>, для асинхронных 
			запросов и изменению <mark>createAsyncThunk</mark> (сами запросы отправляются 
			с помощью <mark>axios</mark>).`,
			
			`В качестве дополнительного примера по ссылке подготовлен стандартный 
			<a href="/todo">Todo-list</a>, данные в который асинхонно подгружаются из 
			JSONPlaceholder и туда и туда же также отправляются ...`
		],
		line: true
	},
	{
		title: 'BackEnd',
		description: [
			`В качетве "бэка" для авторизации и хранения некоторых данных использовал 
			<mark>FireBase от Google</mark>, но думаю вскоре заменю своим на Node.js, 
			а лучше наверное на Nest.js + MongoDB.`
		],
		line: true
	},
	{
		title: 'Docker',
		description: [
			`То, что получилось запушил  <mark>GitHub</mark>, упаковал в <mark>Docker</mark>, 
			и залил на <mark>VPS</mark> (VPS взял у Reg.ru).`
		],
		line: false
	},
];
