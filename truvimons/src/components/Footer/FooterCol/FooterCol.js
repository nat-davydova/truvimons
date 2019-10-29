import React from 'react';

import Title from  './FooterColTitle/FooterColTitle';
import LinksList from './FooterColList/FooterColList';

const footerCol = (props) => {

	const { title, linksList } = props;

	return(
		<div className="footer_col">
			{title && <Title>{title}</Title>}
			{linksList && <LinksList linksList={linksList}/>}
			{props.children}
		</div> );
};

export default footerCol;
