import React from 'react';

import Container from './../Miscellaneous/Container/Container';
import Logo from '../Logo/Logo';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationToggler from './NavigationToggler/NavigationToggler';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	const navClasses = [classes.Nav, props.scrolled ? classes.Scrolled : null].join(' ');

	return (

		<nav className={navClasses}>
			<Container>

				<div className={classes.Nav_inner}>

					<Logo/>

					<NavigationLinks/>

					<NavigationToggler/>

				</div>

			</Container>
		</nav>

	);

};

export default navigation;