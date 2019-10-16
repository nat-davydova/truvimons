import React from 'react';

import classes from './FooterCol.module.scss';

const footerCol = (props) => {
	return <div className={classes.footer_col}>{props.children}</div>
};

export default footerCol;