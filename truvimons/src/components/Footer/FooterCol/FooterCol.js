import React from 'react';

import Title from  './FooterColTitle/FooterColTitle';
import LinksList from './FooterColList/FooterColList';

const footerCol = (props) => {

	const { title, linksList } = props;

	//render column title
	const footerTitle = title ? <Title>{title}</Title> : null;

	//render links list
	const linksListBlock = linksList ? <LinksList linksList={linksList}/> : null;

	//render other content
	const content = props.children ? props.children : null;

	return(
		<div className="footer_col">
			{footerTitle}
			{linksListBlock}
			{content}
		</div> );
};

export default footerCol;
