import React from 'react';
import classnames from 'classnames';

import classes from './Answer.module.scss';

const faqCardAnsw = (props) => {

	const { active } = props;

	const answClasses = classnames(
		classes.faqCard_answ,
		{
			[classes.faqCard_answ___isActive]: active
		}
	);

	return(
		<div className={answClasses}>
			<p>
				{props.children}
			</p>
		</div>
	);
};

export default faqCardAnsw;
