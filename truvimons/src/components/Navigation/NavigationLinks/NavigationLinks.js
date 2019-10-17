import React from 'react';
import uuid from 'uuid/v1';

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {

	const navClassList = [classes.nav_itemsList, props.navToggleState ? classes.isToggled : null].join(' ');

	//navigation links render
	const navLinksArr = [
		{
			href: '#top',
			title: 'Home'
		},

		{
			href: '#services',
			title: 'Services'
		},

		{
			href: '#features',
			title: 'Features'
		},

		{
			href: '#pricing',
			title: 'Pricing'
		},

		{
			href: '#testimonials',
			title: 'Testimonials'
		},

		{
			href: '#faq',
			title: 'FAQ'
		}

	];

	const navLinks = navLinksArr.map(elem => {
		return <NavigationLink href={elem.href}
							   key={uuid()}
							   title={elem.title}/>
	});

	return(
		<ul className={navClassList}>

			{navLinks}

		</ul>
	);
};

export default navigationLinks;