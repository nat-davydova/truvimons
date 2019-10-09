import React from 'react';

import Container from './../../Miscellaneous/Container/Container';
import Logo from '../../Logo/Logo';
import NavigationLinks from './NavigationLinks/NavigationLinks';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	return (

		<nav className={classes.Nav}>
			<Container>

				<div className={classes.Nav_inner}>

					<Logo/>

					<NavigationLinks/>

					<div className={classes.Nav_toggler}>Nav Toggler</div>

				</div>

			</Container>
		</nav>

	);

};

export default navigation;