import React from 'react';
import classnames from 'classnames';

import Container from 'components/Miscellaneous/Container/Container';
import Logo from 'components/Logo/Logo';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationToggler from './NavigationToggler/NavigationToggler';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	const { scrolled, navToggled, toggled } = props;

	const navClasses = classnames(
		classes.nav,
		{
			[classes.isScrolled]: scrolled,
			[classes.isOpened]: navToggled,
		}
	);

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
