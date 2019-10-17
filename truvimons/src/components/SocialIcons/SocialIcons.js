import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons';

import classes from './SocialIcons.module.scss';

const socialIcons = (props) => {

	const socialLinks = [

		{
			title: 'Facebook',
			link: 'https://www.facebook.com/',
			icon: 'FacebookF'
		},

		{
			title: 'Twitter',
			link: 'https://twitter.com',
			icon: 'Twitter'
		},

		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com',
			icon: 'Twitter'
		},

		{
			title: 'Google Play',
			link: 'https://play.google.com/store',
			icon: 'Twitter'
		}

	];

	return(
		<div className={classes.socialIcons}>

			<ul className={classes.socialIcons_list}>

			</ul>
		</div>
	);
};

export default socialIcons;