import React from 'react';

import classes from './NavigationToggler.module.scss';

const navigationToggler = (props) => {

	return(
		<button className={classes.Nav_Toggler}
				title="Navigation Toggler"
				type="button">
			<span></span>
			<span></span>
			<span></span>
		</button>
	)

};

export default navigationToggler;