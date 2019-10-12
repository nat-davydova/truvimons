import React from 'react';

import Container from '../Miscellaneous/Container/Container';
import Badge from './Badge/Badge';
import Title from './Title/Title';
import Descr from './Descr/Descr';

import classes from './Section.module.scss';

const section = (props) => {

	//rendering section title part, if it exists
	let sectionTitleBlock;

	if(props.badge || props.title || props.descr) {
		const sectionBadge = props.badge ? <Badge>{props.badge}</Badge> : null;

		const sectionTitle = props.title ? <Title>{props.title}</Title> : null;

		const sectionDescr = props.descr ? <Descr>{props.descr}</Descr> : null;

		sectionTitleBlock = <div className={classes.section_titleBlock}>
								{sectionBadge}

								{sectionTitle}

								{sectionDescr}
							</div>
	}

	return(
		<section className={classes.section} id={props.id}>
			<Container>

				{sectionTitleBlock}

				<div className={classes.section_content}>
					{props.children}
				</div>

			</Container>
		</section>
	);

};

export default section;