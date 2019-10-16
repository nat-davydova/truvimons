import React from 'react';

import classes from './FAQCardAnswer.module.scss';

const faqCardAnsw = (props) => {

	const answClasses = [
		classes.faqCard_answ,
		props.active ? classes.faqCard_answ___isActive : null
	].join(' ');

	return(
		<div className={answClasses}>
			<p>
				{props.children}
			</p>
		</div>
	);
};

export default faqCardAnsw;