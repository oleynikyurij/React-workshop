import React, { Component } from 'react';

export default class Header extends Component {

	render() {
		return (
			<div className="header">
				<div className='logo'></div>
				<input type="text" placeholder='Search'/>
				<div className='nav'>
					<div className='explore'></div>
					<div className='likes'></div>
					<div className='settings'></div>
				</div>
			</div>
		)
		
	}
}