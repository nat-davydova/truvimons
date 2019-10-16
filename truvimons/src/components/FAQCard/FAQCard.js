import React from 'react';

import Question from './FAQCardQuestion/FAQCardQuestion';
import Answer from './FAQCardAnswer/FAQCardAnswer';

import classes from './FAQCard.module.scss';

const faqCard = (props) => {

	return(
		<div className={classes.faqCard}
			 onClick={props.clicked}>

			<Question active={props.activeTab}>{props.question}</Question>
			<Answer>{props.answer}</Answer>

		</div>
	);
};

export default faqCard;