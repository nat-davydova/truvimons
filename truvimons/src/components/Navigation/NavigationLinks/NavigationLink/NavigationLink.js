import React from 'react';
import { Link } from "react-scroll";

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {

	const { title, href } = props;

	return(
		<li className={classes.nav_item}>

			<Link activeClass={classes.nav_link___isActive}
				  className={classes.nav_link}
				  offset={-70}
				  title={title}
				  smooth={true}
				  spy={true}
				  to={href}>
				{title}
			</Link>
		</li>
	);
};

export default navigationLink;
