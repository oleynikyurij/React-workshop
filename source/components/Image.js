import React, { Component } from 'react';

export default (props) => {
	return props.public ? ( 
		<div className='image'>
			<img src= { props.src } /> 
		</div>
	) : null;
}