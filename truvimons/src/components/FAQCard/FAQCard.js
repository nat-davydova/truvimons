import React from 'react';

import Question from './Question/Question';
import Answer from './Answer/Answer';

import classes from './FAQCard.module.scss';

const faqCard = (props) => {

	const {clicked, activeTab, question, answer} = props;

	return(
		<div className={classes.faqCard}
			 onClick={clicked}>

			<Question active={activeTab}>{question}</Question>
			<Answer active={activeTab}>{answer}</Answer>

		</div>
	);
};

export default faqCard;
