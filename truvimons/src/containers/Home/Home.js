import React, { Component, Fragment } from 'react';

import Section from '../../components/Section/Section';

class Home extends Component{

	render() {

		return(

			<Fragment>

				<Section badge="Services"
						 descr="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
Curae Suspendisse ante arcu, consectetur id nisl eget"
						 id="services"
				         title="Services that we provide">

				</Section>

			</Fragment>

		);

	}

};

export default Home;