import React, { Component, Fragment } from 'react';

class Layout extends Component {

	render() {

		return (
			<Fragment>

				<div>Header and Nav</div>

				<main>
					{this.props.children}
				</main>

				<div>FAQ</div>
				<div>CTA</div>
				<div>Footer</div>

			</Fragment>
		)

	}
}

export default Layout;