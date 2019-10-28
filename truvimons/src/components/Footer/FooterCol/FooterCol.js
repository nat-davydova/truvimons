import React from 'react';

import Title from  './FooterColTitle/FooterColTitle';
import LinksList from './FooterColList/FooterColList';

const footerCol = (props) => {

	const { title, linksList } = props;

	return(
		<div className="footer_col">
			{title ? <Title>{title}</Title> : null}
			{linksList ? <LinksList linksList={linksList}/> : null}
			{props.children ? props.children : null}
		</div> );
};

export default footerCol;
