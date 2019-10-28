import React from 'react';
import classnames from 'classnames';

import classes from './Question.module.scss';

const faqCardQuest = (props) => {

	const { active } = props;

	const questClasses = classnames(
		classes.faqCard_quest,
		{
			[classes.faqCard_quest___isActive]: active
		}
	);

	return <h5 className={questClasses}>{props.children}</h5>;
};

export default faqCardQuest;
