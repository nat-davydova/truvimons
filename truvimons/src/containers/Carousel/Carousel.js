import React, { Component } from 'react';

import classes from './Carousel.module.scss';

class Carousel extends Component {

	render() {

		return(

			<div className={classes.carousel}>
				{this.props.children}
			</div>

		);
	}
}

export default Carousel;