import React from 'react';

const Story = (props) => {

	return (
		<div className='z-0 flex flex-col items-start !justify-center'>
			<img className='cursor-pointer object-cover rounded-full w-14 h-14' alt='story' src={props.img}/>
			<div className='tracking-normal mt-1 text-[12px]'> {props.name.substring(0, 9)}...</div>
		</div>
	);
}

export default Story;
