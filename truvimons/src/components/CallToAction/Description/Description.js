import React from 'react';

import classes from './Description.module.scss';

const callToAction = (props) => {

	return(

		<div className={classes.cta_description}>
			<p>{props.children}</p>
		</div>
	);

};

export default callToAction;