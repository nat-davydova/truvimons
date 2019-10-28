import React from 'react';
import classnames from 'classnames';

import classes from './NavigationToggler.module.scss';

const navigationToggler = (props) => {

	const { navTogglerClick, navToggleState } = props;

	const navToggleClasses = classnames(
		classes.nav_Toggler,
		{
			[classes.isClicked]: navToggleState
		}
	);

	return(
		<button className={navToggleClasses}
				data-toggler={'toggler'}
				onClick={navTogglerClick}
				title="Navigation Toggler"
				type="button">
			<span className={'Nav_Toggler-item'}></span>
			<span className={'Nav_Toggler-item'}></span>
			<span className={'Nav_Toggler-item'}></span>
		</button>
	)

};

export default navigationToggler;
