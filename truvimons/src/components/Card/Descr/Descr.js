import React from 'react';

const descr = (props) => {

	return (
		<div className="card_descr">
			<p>{props.children}</p>
		</div>
	);
};

export default descr;
