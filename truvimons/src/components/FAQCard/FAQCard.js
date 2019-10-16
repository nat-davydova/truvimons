import React from 'react';

import Question from './FAQCardQuestion/FAQCardQuestion';
import Answer from './FAQCardAnswer/FAQCardAnswer';

import classes from './FAQCard.module.scss';

const faqCard = (props) => {

	const tabClasses = [
		classes.faqCard,
		props.activeTab ? classes.faqCard___isActive : null
	].join(' ');

	return(
		<div className={tabClasses}
			 onClick={props.clicked}>
			<Question>{props.question}</Question>
			<Answer>{props.answer}</Answer>
		</div>
	);
};

export default faqCard;