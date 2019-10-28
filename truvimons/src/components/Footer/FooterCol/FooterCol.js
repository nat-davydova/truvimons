import React from 'react';

import Title from  './FooterColTitle/FooterColTitle';
import LinksList from './FooterColList/FooterColList';

const footerCol = (props) => {

	//render column title
	const footerTitle = props.title ? <Title>{props.title}</Title> : null;

	//render links list
	const linksList = props.linksList ? <LinksList linksList={props.linksList}/> : null;

	//render other content
	const content = props.children ? props.children : null;

	return(
		<div className="footer_col">
			{footerTitle}
			{linksList}
			{content}
		</div> );
};

export default footerCol;
