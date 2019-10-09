import React from 'react';

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {

	const navClassList = [classes.Nav_itemsList, props.navToggleState ? classes.Toggled : null].join(' ');

	return(
		<ul className={navClassList}>

			<NavigationLink active="true"
							href="index.html">Home</NavigationLink>
			<NavigationLink href="index.html/#services">Services</NavigationLink>
			<NavigationLink href="index.html/#features">Features</NavigationLink>
			<NavigationLink href="index.html/#pricing">Pricing</NavigationLink>
			<NavigationLink href="index.html/#testimonials">Testimonials</NavigationLink>
			<NavigationLink href="index.html/#faq">FAQ</NavigationLink>

		</ul>
	);
};

export default navigationLinks;