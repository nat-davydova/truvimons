import React from 'react';

import Container from '../Miscellaneous/Container/Container';
import Logo from '../Logo/Logo';
import SocialIcons from '../SocialIcons/SocialIcons';
import FooterCol from './FooterCol/FooterCol';

import classes from './Footer.module.scss';

const footer = (props) => {

	const productsLinks = [
		{
			title: 'Business',
			href: '#'
		},

		{
			title: 'Compare',
			href: '#'
		},

		{
			title: 'Features',
			href: '#'
		},

		{
			title: 'Pricing',
			href: '#'
		}
	];

	const aboutLinks = [
		{
			title: 'Blog',
			href: '#'
		},

		{
			title: 'News',
			href: '#'
		},

		{
			title: 'Press Releases',
			href: '#'
		},

		{
			title: 'Jobs',
			href: '#'
		}
	];

	const learnLinks = [
		{
			title: 'Support',
			href: '#'
		},

		{
			title: 'Developers',
			href: '#'
		},

		{
			title: 'Customer Service',
			href: '#'
		},

		{
			title: 'Ger Started Guide',
			href: '#'
		}
	];

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
