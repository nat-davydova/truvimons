import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

class Layout extends Component {



	render() {

		return (
			<Fragment>

				<Navigation/>

				<Header/>

				{/*<main>*/}
				{/*	{this.props.children}*/}
				{/*</main>*/}

				{/*<div>FAQ</div>*/}
				{/*<div>CTA</div>*/}
				{/*<div>Footer</div>*/}

			</Fragment>
		)

	}
}

export default Layout;