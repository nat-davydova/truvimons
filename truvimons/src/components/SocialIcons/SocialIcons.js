import React from 'react';
import uuid from 'uuid/v1';

import SocialIcon from './SocialIcon/SocialIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './SocialIcons.module.scss';

const socialIcons = (props) => {

	const socialLinks = [

		{
			title: 'Facebook',
			link: 'https://www.facebook.com/',
			icon: 'facebook-f'
		},

		{
			title: 'Twitter',
			link: 'https://twitter.com',
			icon: 'twitter'
		},

		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com',
			icon: 'linkedin-in'
		},

		{
			title: 'Google Play',
			link: 'https://play.google.com/store',
			icon: 'google-play'
		}

	];

	//rendering social links
	const socialLinksArr = socialLinks.map(elem => {
		return(
			<SocialIcon link={elem.link}
						key={uuid()}
						title={elem.title}>
				<FontAwesomeIcon icon={['fab', `${elem.icon}`]} />
			</SocialIcon>
		);
	});

	return(
		<div className={classes.socialIcons}>

			<ul className={classes.socialIcons_list}>

				{socialLinksArr}

			</ul>
		</div>
	);
};

export default socialIcons;