import React from 'react';

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {
	return(
		<ul className={classes.Nav_itemsList}>

			<NavigationLink href="index.html">Home</NavigationLink>
			<NavigationLink href="index.html/#services">Services</NavigationLink>
			<NavigationLink href="index.html/#features">Features</NavigationLink>
			<NavigationLink href="index.html/#pricing">Pricing</NavigationLink>
			<NavigationLink href="index.html/#testimonials">Testimonials</NavigationLink>
			<NavigationLink href="index.html/#faq">FAQ</NavigationLink>

		</ul>
	);
};

export default navigationLinks;