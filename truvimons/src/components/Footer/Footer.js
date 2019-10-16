import React from 'react';

import Container from '../Miscellaneous/Container/Container';
import Logo from '../Logo/Logo';
import FooterCol from './FooterCol/FooterCol';

import classes from './Footer.module.scss';

const footer = (props) => {
	return(

		<footer className={classes.footer}>
			<Container>
				<div className={classes.footer_inner}>

					<FooterCol>

						<Logo/>
						
					</FooterCol>

				</div>
			</Container>
		</footer>

	);
};

export default footer;