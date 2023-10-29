import React from 'react';
import { DenseAppBar } from '../components/DenseAppBar';
import { PermanentDrawerLeft } from '../components/PermanentDrawerLeft';
import Typography from '@mui/material/Typography';
import Camera from '../components/Camera';
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
						
						<div className='scrolling'>
							<Typography className='nameTitle' variant='h2' align='center' >Barack Obama</Typography>
							<ul className='bullets'> <text>Tips To Be Like Obama!</text>
								<li>Speak Good</li>
								<li>Don't be Racist!!</li>
								<li>Pretend to be Humanitarian!</li>
								<li>Care about the environment because it'll kill you</li>
							</ul>
							<div >
								<iframe className='videos' src="https://www.youtube.com/embed/c9fXiv1UELo" title="Pulsar Bike Full Video Song | Dhamaka | Ravi Teja | Sreeleela | Thrinadha Rao | Bheems Ceciroleo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								<iframe className='videos' src="https://www.youtube.com/embed/VAdGW7QDJiU" title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<text className='nameTitle'>Try it Yourself!</text>
							<Camera></Camera>
						</div>
						
					</div>
					
				</div>
			</div>
			
		</div>
  	);
};

export default Learn;