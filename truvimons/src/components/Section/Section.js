import React from 'react';

import Container from '../Miscellaneous/Container';

import classes from './Section.module.scss';

const section = (props) => {

	const sectionBadge = props.badge ? <div className={classes.section_badge}>{props.badge}</div> : null;

	const sectionTitle = props.title ? <h3 className={classes.section_title}>{props.title}</h3> : null;

	const sectionDescr = props.descr ? <h3 className={classes.section_descr}>{props.descr}</h3> : null;

	return(
		<section className={classes.section}>
			<Container>

				{sectionBadge}

				{sectionTitle}

				{sectionDescr}

				<div className={classes.section_content}>
					{props.children}
				</div>

			</Container>
		</section>
	);

};

export default section;