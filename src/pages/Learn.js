import React from 'react';
import { DenseAppBar } from '../components/DenseAppBar';
import { PermanentDrawerLeft } from '../components/PermanentDrawerLeft';
import Typography from '@mui/material/Typography';
import Camera from '../components/Camera';
import "./Learn.css";
import DynamicSizedPaper from '../components/Paper';


function Learn(){
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
								<li>Barack Obama is known for his effective communication skills and commanding use of language.</li>
								<li>When addressing his audience, Obama ensures that his voice conveys passion and a sense of drive, keeping the audience engaged.</li>
								<li>Obama incorporates humor into his speeches, demonstrating a willingness to go beyond conventional boundaries.</li>
								<li>In conclusion, Obama consistently emphasizes hopefulness in his speeches, reflecting genuine emotions that resonate with his audiences.</li>
							</ul>
							<div >
								<iframe className='videos' src="https://www.youtube.com/embed/oZH4n6DfcFw" title="President Barack Obama delivers stirring speech in Parliament" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								<iframe className='videos' src="https://www.youtube.com/embed/bps3m4eFTuE" title="Watch Barack Obama’s Full Speech At The 2020 DNC | NBC News" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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