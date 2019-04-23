import React, { Component } from 'react';
import { withNaming } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import Filters from '../filters';

import './index.scss';

import SvgPlane from '../../assets/icons/Plane';

const cn = withNaming(
	{
	n: ' ',
	e: '__',
	m: '_',
	v: '_'
});
const app = cn('app');

export default class App extends Component {
	render() {
		return(
			<div className={app()}>
				<div className={app('inner')}>
					<div className={app('sidePanel')}>
						<Filters />
					</div>
					<div className={classnames('Block', app('content'))}></div>
				</div>
			</div>
		)
	}
}
