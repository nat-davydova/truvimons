import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

class Layout extends Component {

	state = {
		windowScrolled: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.navScrollHandler);
	}

	navScrollHandler = () => {

		const scrollTop = window.pageYOffset;

		let windowScrolled;

		if(scrollTop > 0) {
			windowScrolled = true;
		} else {
			windowScrolled = false;
		}

		this.setState({
			windowScrolled: windowScrolled
		})
	};

	render() {

		return (
			<Fragment>

				<Navigation scrolled = {this.state.windowScrolled}/>

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