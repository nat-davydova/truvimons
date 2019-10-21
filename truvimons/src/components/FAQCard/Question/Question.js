import React from 'react';

import classes from './Question.module.scss';

const faqCardQuest = (props) => {

	const questClasses = [
		classes.faqCard_quest,
		props.active ? classes.faqCard_quest___isActive : null
	].join(' ');

	return(
		<h5 className={questClasses}>{props.children}</h5>
	);
};

export default faqCardQuest;