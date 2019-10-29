import React from 'react';

import classes from './SocialIcon.module.scss';

const socialIcon = (props) => {

	const { link, title } = props;

	return(
		<li className={classes.socialIcons_item}>
			<a href={link}
			   title={title}
			   target="_blank"
				rel="noopener noreferrer">
				{props.children}
			</a>
		</li>
	);
};

export default socialIcon;
