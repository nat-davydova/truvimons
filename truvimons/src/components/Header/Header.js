import React from 'react';

import classes from './Header.module.scss';

const header = (props) => {

	return (
		<header className={classes.Header}>
			
			<nav>Navigation</nav>

			<div className={classes.Header_Content}>
				Header Content
			</div>

		</header>
	)

};

export default header;