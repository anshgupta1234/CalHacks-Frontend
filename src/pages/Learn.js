import React from 'react';
import { DenseAppBar } from '../components/DenseAppBar';
import { PermanentDrawerLeft } from '../components/PermanentDrawerLeft';
import "./Learn.css";

const Learn = () => {
	return (
		<div className='parent'>
			<div className='appBar'>
				<DenseAppBar/>
			</div>
			<div className='childDiv'>
				<div className='leftBar'>
					<PermanentDrawerLeft></PermanentDrawerLeft>
				</div>
				<div className='rightBar'>

					<div className='scrolling'>
						<text>Paragraph Text</text>
					</div>
				</div>
			</div>
			
		</div>
  	);
};

export default Learn;