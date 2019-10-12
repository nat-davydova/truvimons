import React from 'react';

import Container from '../Miscellaneous/Container/Container';
import CallToAction from "../CallToAction/CallToAction";

import { ReactComponent as TestImg } from '../../assets/img/dashboard.svg';

import classes from './Header.module.scss';

const header = (props) => {

	return (
		<header className={classes.header} id="top">
			<Container>
				<div className={classes.header_inner}>

					<CallToAction title="Ultimate Data Analyse Platform"
								  titleLvl="1"
								  description="We help to create SaaS product that are innovative, differentiated
											   with a superb User Experience, fully accessible through mobile
											   devices. SaaS products are changing the world."
									btns= {
										[
											{
												active: true,
												category: 'gradient',
												text: 'Start Now',
												type: 'button'
											},

											{
												active: false,
												category: 'gradient',
												text: 'Explore More',
												type: 'button'
											}
										]
									} >
						<TestImg/>
					</CallToAction>

				</div>
			</Container>
		</header>
	)

};

export default header;