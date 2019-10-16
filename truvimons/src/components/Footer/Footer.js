import React from 'react';

import Container from '../Miscellaneous/Container/Container';

import classes from './Footer.module.scss';

const footer = (props) => {
	return(

		<footer className={classes.footer}>
			<Container>
				<div className={classes.footer_inner}>

				</div>
			</Container>
		</footer>

	);
};

export default footer;