import React from 'react';

import classes from './FAQCardQuestion.module.scss';

const faqCardQuest = (props) => {
	return(
		<h5 className={classes.faqCard_quest}>{props.children}</h5>
	);
};

export default faqCardQuest;