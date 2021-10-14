import { EducationProps } from './Education.props';
import styles from './Education.module.scss';
import cn from 'classnames';
//import { Htag } from '../../UI';
import { useState } from 'react';
import { Container } from '../../UI';
import { Modal } from '../Modal/Modal';
import { certificate } from './data';
import External_link from './external_link.svg';
import { Tag } from '../Tag/Tag';

export function Education( {className, children, ...props }: EducationProps ): JSX.Element {

	const listEducation = ['Физ-мат', 'Udemy', 'Coursera', 'Stepic', 'mail.ru', 'МФТИ', 'Yandex'];

	const [{modal, src}, setModalActive] = useState<{
		modal: boolean, 
		src: string
	}>({modal: false, 
		src: ''});

	const courses =certificate.map((item, i) => {
		return (
			<div className={styles.courses} key={i}>
				<img 
					src={item.certificate} 
					alt="Сертификат о прохождении курса" 
					onClick={() => {
						setModalActive({
							modal: true, 
							src: item.certificate
						});
					}}
				/>
				<p>{item.school}: {item.title} <a href={item.link} target="_blank"><External_link /></a></p>
			</div>
		);
	});

	return (
		<>
			<div className={styles.wrap}>
				<Container> 
					<div className={styles.skils} id="education" >
						<div className={styles.title}>
							<h1>Образование</h1>
							<ul>
								<Tag list={listEducation} id="education"/>
							</ul>
						</div>

						<div className={styles.info}>
							<div className={styles.story}>
								<h2>Высшее образование</h2>
								<p>
									АГПИ им. А.П.Гайдара (г. Арзамас, сейчас это ННГУ им. Н.И. Лобачевского)<br/>
									образование - высшее, <br/>
									факультет: физико-математический
								</p>
								<h2>Курсы дополнительного образования</h2>
								<div className={styles.other}>
									{courses}
								</div>
							</div>
						</div>

					</div>
				</Container>
			</div>

			<Modal
				setModalActive={setModalActive}
				modalActive={{modal, src}}
			/>
		</>
	);
}