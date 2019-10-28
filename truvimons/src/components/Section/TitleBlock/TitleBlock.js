import React from 'react';

import Badge from './Badge/Badge';
import Title from './Title/Title';
import Descr from './Descr/Descr';

import classes from "./TitleBlock.module.scss";

const titleBlock = (props) => {

	const { badge, title, descr, lightMode} = props;

	return(
		<div className={classes.section_titleBlock}>
			{badge ? <Badge>{badge}</Badge> : null}

			{title ? <Title lightMode={lightMode}>{title}</Title> : null}

			{descr ? <Descr lightMode={lightMode}>{descr}</Descr> : null}
		</div>
	)
};

export default titleBlock;
