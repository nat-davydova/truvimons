import React from 'react';

import Container from './../../Miscellaneous/Container/Container';

import classes from './Navigation.module.scss';

const navigation = (props) => {

	return (
		<nav className={classes.Nav}>
			<Container>
				<div className={classes.Nav_inner}>
					<div>Logo</div>
					<div>Nav Links</div>
					<div>Nav Toggler</div>
				</div>
			</Container>
		</nav>
	);

};

export default navigation;