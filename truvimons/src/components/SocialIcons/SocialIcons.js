import React from 'react';
import uuid from 'uuid/v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SocialIcon from './SocialIcon/SocialIcon';
import { socialLinks } from "./constants";

import classes from './SocialIcons.module.scss';

const socialIcons = (props) => {

	//rendering social links
	const socialLinksArr = socialLinks.map(({link, title, icon}) => (
		<SocialIcon link={link}
					key={uuid()}
					title={title}>
			<FontAwesomeIcon icon={['fab', `${icon}`]} />
		</SocialIcon>
	));

	return(
		<div className={classes.socialIcons}>

			<ul className={classes.socialIcons_list}>

				{socialLinksArr}

			</ul>
		</div>
	);
};

export default socialIcons;
