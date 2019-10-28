import React from 'react';
import classnames from 'classnames';

import Container from '../Miscellaneous/Container/Container';
import Badge from './Badge/Badge';
import Title from './Title/Title';
import Descr from './Descr/Descr';

import classes from './Section.module.scss';

const section = (props) => {

	const { badge, title, descr, lightMode, paddingLarge, className, id } = props;

	//rendering section title part, if it exists
	let sectionTitleBlock;

	if(badge || title || descr) {
		const sectionBadge = badge ? <Badge>{badge}</Badge> : null;

		let sectionTitle = title ? <Title lightMode={lightMode}>{title}</Title> : null;

		const sectionDescr = descr ? <Descr lightMode={lightMode}>{descr}</Descr> : null;

		sectionTitleBlock = <div className={classes.section_titleBlock}>
								{sectionBadge}

								{sectionTitle}

								{sectionDescr}
							</div>
	}

	let sectionClasses = classnames(
		classes.section,
		`${className}`,
		{
			[classes.section___pLg]: paddingLarge
		}
	);

	return(
		<section className={sectionClasses} id={id}>
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
