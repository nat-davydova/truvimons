import React from 'react';

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {
	return(
		<li className={classes.Nav_item}>
			<a className={classes.Nav_link}
			   href={props.href}
			   title={props.children}>
				{props.children}
			</a>
		</li>
	);
};

export default navigationLink;