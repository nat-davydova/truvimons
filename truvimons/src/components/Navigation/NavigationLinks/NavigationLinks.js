import React from 'react';

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {

	const navClassList = [classes.nav_itemsList, props.navToggleState ? classes.isToggled : null].join(' ');

	return(
		<ul className={navClassList}>

			<NavigationLink active="true"
							href="#top">Home</NavigationLink>
			<NavigationLink href="#services">Services</NavigationLink>
			<NavigationLink href="#features">Features</NavigationLink>
			<NavigationLink href="#pricing">Pricing</NavigationLink>
			<NavigationLink href="#testimonials">Testimonials</NavigationLink>
			<NavigationLink href="/#faq">FAQ</NavigationLink>

		</ul>
	);
};

export default navigationLinks;