import React from 'react';

import classes from './Description.module.scss';

const description = (props) => (

	<div className={classes.cta_description}>
		<p>{props.children}</p>
	</div>

);;

export default description;
