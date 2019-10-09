import React from 'react';

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {

	const navLinkClasses = [classes.Nav_link, props.active ? classes.isActive : null].join(' ');

	return(
		<li className={classes.Nav_item}>
			<a className={navLinkClasses}
			   href={props.href}
			   title={props.children}>
				{props.children}
			</a>
		</li>
	);
};

export default navigationLink;