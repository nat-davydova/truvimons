import React from 'react';

import classes from './Descr.module.scss';

const descr = (props) => {

	return(
		<div className={classes.section_descr}>
			{props.children}
		</div>
	);

};

export default descr;