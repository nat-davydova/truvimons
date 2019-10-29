import React from 'react';
import classnames from 'classnames';

import Container from 'components/Miscellaneous/Container/Container';
import TitleBlock from './TitleBlock/TitleBlock';


import classes from './Section.module.scss';

const section = (props) => {

	const { badge, title, descr, lightMode, paddingLarge, className, id } = props;


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

				<TitleBlock badge={badge}
					title={title}
					descr={descr}
					lightMode={lightMode}/>

				<div className={classes.section_content}>
					{props.children}
				</div>

			</Container>
		</section>
	);

};

export default section;
