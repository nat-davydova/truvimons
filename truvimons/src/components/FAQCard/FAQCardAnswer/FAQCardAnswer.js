import React from 'react';

import classes from './FAQCardAnswer.module.scss';

const faqCardAnsw = (props) => {
	return(
		<div className={classes.faqCard_answ}>
			<p>
				{props.children}
			</p>
		</div>
	);
};

export default faqCardAnsw;