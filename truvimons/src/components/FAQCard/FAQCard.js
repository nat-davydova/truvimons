import React from 'react';

import Question from './FAQCardQuestion/FAQCardQuestion';

import classes from './FAQCard.module.scss';

const faqCard = (props) => {
	return(
		<div className={classes.faqCard}>
			<Question>{props.question}</Question>
		</div>
	);
};

export default faqCard;