import React from 'react';

import Navigation from './Navigation/Navigation';

import classes from './Header.module.scss';

const header = (props) => {

	return (
		<header className={classes.Header}>

			<Navigation/>

			{/*<div className={classes.Header_Content}>*/}
			{/*	Header Content*/}
			{/*</div>*/}

		</header>
	)

};

export default header;