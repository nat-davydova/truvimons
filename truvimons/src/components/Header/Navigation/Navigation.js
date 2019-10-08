import React from 'react';

import Container from './../../Miscellaneous/Container/Container';
import Logo from '../../Logo/Logo';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	return (

		<nav className={classes.Nav}>
			<Container>

				<div className={classes.Nav_inner}>

					<Logo/>
					<div>Nav Links</div>
					<div className={classes.Nav_toggler}>Nav Toggler</div>

				</div>

			</Container>
		</nav>

	);

};

export default navigation;