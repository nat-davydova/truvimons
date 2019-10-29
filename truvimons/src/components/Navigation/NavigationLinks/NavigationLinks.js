import React from 'react';
import uuid from 'uuid/v1';
import classnames from 'classnames';

import NavigationLink from "./NavigationLink/NavigationLink";
import { navLinksArr } from '../constants';

import classes from './NavigationLinks.module.scss';

const navigationLinks = (props) => {

	const { navToggleState } = props;

	const navClasses = classnames(
		classes.nav_itemsList,
		{
			[classes.isToggled]: navToggleState,
		}
	);

	//navigation links render
	const navLinks = navLinksArr.map(({href, title}) => (
		<NavigationLink href={href}
						key={uuid()}
						title={title}/>
	));

	return(
		<ul className={navClasses}>

			{navLinks}

		</ul>
	);
};

export default navigationLinks;
