import React from 'react';

import Container from 'components/Miscellaneous/Container/Container';
import Logo from 'components/Logo/Logo';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import FooterCol from './FooterCol/FooterCol';

import { productsLinks, aboutLinks, learnLinks } from './constants';

import classes from './Footer.module.scss';

const footer = (props) => {

	return(

		<footer className={classes.footer}>
			<Container>
				<div className={classes.footer_inner}>

					<FooterCol>

						<Logo/>

						<div className={classes.footer_socials}>
							<SocialIcons/>
						</div>

					</FooterCol>

					<FooterCol title="Product"
					           linksList={productsLinks}/>

					<FooterCol title="About us"
							   linksList={aboutLinks}/>

					<FooterCol title="Learn more"
							   linksList={learnLinks}/>

				</div>
			</Container>
		</footer>

	);
};

export default footer;
