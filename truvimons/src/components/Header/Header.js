import React from 'react';

import Container from 'components/Miscellaneous/Container/Container';
import CallToAction from "components/CallToAction/CallToAction";

import { btns } from './constants';

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
									btns= {btns} >
					</CallToAction>

				</div>
			</Container>
		</header>
	)

};

export default header;
