import React from 'react';
import uuid from 'uuid/v1';

import Button from 'components/UI/Button/Button';

import classes from './BtnBlock.module.scss';

const btnBlock = (props) => {

	const { btns } = props;

	let btnsArr;

	if(btns && btns.length > 0) {

		btnsArr = btns.map(({active, category, type, text}) => {

			return <Button active={active}
						   category={category}
						   key={uuid()}
						   type={type}>{text}</Button>
		});

	}

	return(

		<div className={classes.cta_btnBlock}>
			{btnsArr}
		</div>
	);

};

export default btnBlock;
