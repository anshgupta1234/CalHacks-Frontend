import React from 'react';
import { DenseAppBar } from '../components/DenseAppBar';
import { PermanentDrawerLeft } from '../components/PermanentDrawerLeft';
import Typography from '@mui/material/Typography';
import Camera from '../components/Camera';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
					<div className='textArea'>
						<Typography className='nameTitle' variant='h2' align='center' >Barack Obama</Typography>
						<div className='scrolling'>
							<ul className='bullets'> <text>Tips To Be Like Obama!</text>
								<li>Speak Good</li>
								<li>Don't be Racist!!</li>
								<li>Pretend to be Humanitarian!</li>
								<li>Care about the environment because it'll kill you</li>
							</ul>
						</div>
						
					</div>
					
				</div>
			</div>
			
		</div>
  	);
};

export default Learn;