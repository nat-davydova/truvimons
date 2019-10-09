import React from 'react';

import classes from './NavigationToggler.module.scss';

const navigationToggler = (props) => {

	const navToggleClasses = [classes.Nav_Toggler, props.navToggleState ? classes.Clicked : null].join(' ');

	return(
		<button className={navToggleClasses}
				data-toggler={'toggler'}
				onClick={props.navTogglerClick}
				title="Navigation Toggler"
				type="button">
			<span className={'Nav_Toggler-item'}></span>
			<span className={'Nav_Toggler-item'}></span>
			<span className={'Nav_Toggler-item'}></span>
		</button>
	)

};

export default navigationToggler;