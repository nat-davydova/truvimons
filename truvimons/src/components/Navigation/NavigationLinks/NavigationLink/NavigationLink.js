import React from 'react';

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {

	const navLinkClasses = [classes.nav_link, props.active ? classes.isActive : null].join(' ');

	return(
		<li className={classes.nav_item}>
			<a className={navLinkClasses}
			   href={props.href}
			   title={props.title}>
				{props.title}
			</a>
		</li>
	);
};

export default navigationLink;