import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';

class Layout extends Component {

	state = {
		navToggled: false,
		windowScrolled: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.navScrollHandler);
	}

	//navigation styles onscroll
	navScrollHandler = () => {

		const scrollTop = window.pageYOffset;

		let windowScrolled;

		scrollTop > 0 ? windowScrolled = true : windowScrolled = false;

		this.setState({
			windowScrolled: windowScrolled
		})
	};

	//mobile navigation toggler
	navToggleHandler = () => {

		let toggleStatus = this.state.navToggled;

		this.setState({
			navToggled: !toggleStatus
		});

	};

	//main navigation handler:
	navClickHandler = (e) => {

		let clickTarget = e.target;

		//if clicked item is a span in the toggler - we need to pick toggle
		if(clickTarget.classList.contains('Nav_Toggler-item')) {
			clickTarget = clickTarget.parentNode;
		}

		//pick proper handler which depends on clicked item
		if(clickTarget.dataset.toggler) {
			this.navToggleHandler();
		}

	};

	render() {

		return (
			<Fragment>

				<Navigation clicked = {this.navClickHandler}
							navToggled = {this.state.navToggled}
							scrolled = {this.state.windowScrolled}/>

				<Header/>

				<main>
					{this.props.children}
				</main>

				{/*<div>Footer</div>*/}

			</Fragment>
		)

	}
}

export default Layout;