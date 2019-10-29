import React from 'react';
import classnames from 'classnames';

import classes from './Image.module.scss';

const image = (props) => {

	const { reversed } = props;

	const imgClassnames = classnames({
		[classes.cta_img]: true,
		[classes.cta_img___reversed]: reversed
	});

	return(
		<div className={imgClassnames}>
			{props.children}
		</div>
	);

};

export default image;
