import React, { Component } from 'react';

import Profile from './Profile';
import Images from './Images';

export default class Content extends Component {

	render() {
		return (
			<div className="content">
				<Profile />
				<Images />
			</div>
		)
		
	}
}