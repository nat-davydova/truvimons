import React from 'react';

import classes from './Logo.module.scss';

const logo = (props) => {

	return(
		<div className={classes.logo}>
			<a href="index.html" title="Truvimons Homepage">
				Truvi<span>mons</span>
			</a>
		</div>
	)

};

export default logo;