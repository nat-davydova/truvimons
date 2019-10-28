import React from 'react';

import Question from './Question/Question';
import Answer from './Answer/Answer';

import classes from './FAQCard.module.scss';

const faqCard = (props) => {

	return(
		<div className={classes.faqCard}
			 onClick={props.clicked}>

			<Question active={props.activeTab}>{props.question}</Question>
			<Answer active={props.activeTab}>{props.answer}</Answer>

		</div>
	);
};

export default faqCard;
