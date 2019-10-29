import React from 'react';

import classes from './Badge.module.scss';

const badge = (props) => <span className={classes.section_badge}>{props.children}</span>;

export default badge;
