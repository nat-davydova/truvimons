import React from 'react';

import classes from './SocialIcon.module.scss';

const socialIcon = (props) => {
	return(
		<li className={classes.socialIcons_item}>
			<a href={props.link}
			   title={props.title}
			   target="_blank">
				{props.children}
			</a>
		</li>
	);
};

export default socialIcon;
