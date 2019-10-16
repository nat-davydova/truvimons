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

		let sectionTitle = props.title ? <Title lightMode={props.lightMode}>{props.title}</Title> : null;

		const sectionDescr = props.descr ? <Descr lightMode={props.lightMode}>{props.descr}</Descr> : null;

		sectionTitleBlock = <div className={classes.section_titleBlock}>
								{sectionBadge}

								{sectionTitle}

								{sectionDescr}
							</div>
	}

	let sectionClasses = [
		classes.section,
		props.className ? props.className : null,
		props.paddingLarge ? classes.section___pLg : null
	].join(' ');

	return(
		<section className={sectionClasses} id={props.id}>
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