import React from 'react';

import Container from './../../Miscellaneous/Container/Container';
import Logo from '../../Logo/Logo';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationToggler from './NavigationToggler/NavigationToggler';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	return (

		<nav className={classes.Nav}>
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