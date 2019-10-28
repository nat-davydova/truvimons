import React from 'react';

import Container from './../Miscellaneous/Container/Container';
import Logo from '../Logo/Logo';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationToggler from './NavigationToggler/NavigationToggler';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	const { scrolled, navToggled, toggled } = props;

	const navClasses = [classes.nav,
						scrolled ? classes.isScrolled : null,
						navToggled ? classes.isOpened : null
						].join(' ');

	return (

		<nav className={navClasses}>
			<Container>

				<div className={classes.nav_inner}>

					<Logo/>

					<NavigationLinks navToggleState = {navToggled}/>

					<NavigationToggler navTogglerClick={toggled}
							navToggleState = {navToggled}/>

				</div>

			</Container>
		</nav>

	);

};

export default navigation;
