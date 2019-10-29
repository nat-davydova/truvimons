import React, { Component, Fragment } from 'react';

import Navigation from 'components/Navigation/Navigation';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class Layout extends Component {

	state = {
		navToggled: false,
		windowScrolled: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.navScrollHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.navScrollHandler);
	}

	//navigation styles onscroll
	navScrollHandler = () => {

		const scrollTop = window.pageYOffset;

		let windowScrolled =scrollTop > 0;

		this.setState({
			windowScrolled
		})
	};

	//mobile navigation toggler
	navToggleHandler = () => {

		let toggleStatus = this.state.navToggled;

		this.setState({
			navToggled: !toggleStatus
		});

	};


	render() {

		return (
			<Fragment>

				<Navigation toggled = {this.navToggleHandler}
							navToggled = {this.state.navToggled}
							scrolled = {this.state.windowScrolled}/>

				<Header/>

				<main>
					{this.props.children}
				</main>

				<Footer/>

			</Fragment>
		)

	}
}

export default Layout;
