import React from 'react';

import Container from '../Miscellaneous/Container/Container';
import CallToAction from "../CallToAction/CallToAction";

import classes from './Header.module.scss';

const header = (props) => {

	return (
		<header className={classes.Header}>
			<Container>
				<div>

					<CallToAction title="Ultimate Platform to data analyse your workflow"
								  titleLvl="1"
								  description="We help to create SaaS product that are innovative, differentiated
											   with a superb User Experience, fully accessible through mobile
											   devices. SaaS products are changing the world."/>

				</div>
			</Container>
		</header>
	)

};

export default header;