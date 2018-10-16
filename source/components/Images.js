import React, { Component } from 'react';

import images from '../theme/assets/images';
import Image from './Image';

export default class Images extends Component {

	render() {
		const  imagesJSX = images.map((element) => {
			return (
				<Image 
				src = { element.src } 
				key = { element.id }
				public = { element.public}
				/>
			);
		});
		
		return (
				<div className="images">
			
				{ imagesJSX }
				
			</div>
			);
		
		
	}
}