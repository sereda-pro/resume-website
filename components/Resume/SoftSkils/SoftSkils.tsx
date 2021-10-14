import { SoftSkilsProps } from './SoftSkils.props';
import styles from './SoftSkils.module.scss';
//import cn from 'classnames';
import { Container} from '../../UI';
import { Tag } from '../Tag/Tag';


export function SoftSkils( {className, children, ...props }: SoftSkilsProps ): JSX.Element {

	const listSoftSkils = ['Waterfall', 'Agile', 'Scrum', 'Figma'];

	return (
		<div className={styles.wrap}>

		
		<Container> 
			<div className={styles.skils} id="softskils" >
				<div className={styles.title}>
					<h1>Другие полезные навыки</h1>

					<ul>
						<Tag list={listSoftSkils} id="softskils"/>
						
					</ul>
				</div>

				<div className={styles.info}>
					<div className={styles.story}>
						<h2>Что-то...</h2>
						<p>Если я вам все расскажу, вы не поверите на сколько я могу быть вам полезен... это не шутка&nbsp;&#128526;&nbsp; 
							Но расскажу только Вам и лично.</p>
						<h2>Переговоры</h2>
						<p>Скажем так, я много работал в ИТ со стороны заказчиков, работал с техническими заданиями на разработку ПО, 
							договорами (договорами на разработку, лицензионными и т.п.), занимался приемкой и экспертизой результатов работ 
							(разработанного ПО) и прочими страшными бюрократическими вещами, поэтому в плане коммуникации с "первыми" и "не первми" лицами 
							(руководителями, заказчиками, лицами не обладающими техническими знаниями и опытом) проблем у меня нет.</p>
						<h2>Что-то еще...</h2>
						<p>Наверное у меня еще какие навыки завалялись, в общем как вспомню о них обязательно дополню раздел. 
						</p>
					</div>
					
				</div>

			</div>
		</Container>

		</div>
	);
}