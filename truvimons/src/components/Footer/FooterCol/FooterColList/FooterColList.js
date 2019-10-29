import React from 'react';
import uuid from 'uuid';

import classes from './FooterColList.module.scss';

const footerColList = (props) => {

	const { linksList } = props;

	const linksArr = linksList.map(({href, title}) => (

		<li className={classes.footer_colListItem}
			key={uuid()}>
			<a className={classes.footer_colListLink}
			   href={href}
			   title={title}>
				{title}
			</a>
		</li>

	));

	return (
		<ul className={classes.footer_colList}>
			{linksArr}
		</ul>
	);
};

export default footerColList;
