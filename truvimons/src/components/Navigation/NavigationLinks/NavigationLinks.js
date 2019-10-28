import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {

	const { navToggleState } = props;

	const navClasses = classnames(
		classes.nav_itemsList,
		{
			[classes.isToggled]: navToggleState
		}
	);

	//navigation links render
	const navLinksArr = [
		{
			href: 'top',
			title: 'Home'
		},

		{
			href: 'services',
			title: 'Services'
		},

		{
			href: 'features',
			title: 'Features'
		},

		{
			href: 'pricing',
			title: 'Pricing'
		},

		{
			href: 'testimonials',
			title: 'Testimonials'
		},

		{
			href: 'faq',
			title: 'FAQ'
		}

	];

	const navLinks = navLinksArr.map(({href, title}) => {
		return <NavigationLink href={href}
							   key={uuid()}
							   title={title}/>
	});

	return(
		<ul className={navClasses}>

			{navLinks}

		</ul>
	);
};

export default navigationLinks;
