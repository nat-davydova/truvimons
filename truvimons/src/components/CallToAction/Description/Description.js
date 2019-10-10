import React from 'react';

import classes from './Description.module.scss';

const callToAction = (props) => {

	return(
		<div>{props.children}</div>
	);

};

export default callToAction;