import React from 'react';
import Search from '../../components/search';
import Panel from '../../components/panel';

import logo from '../../assets/title-logo.png'
import { Container, Flex } from '../../main-styles/style'


const Index = () => {
	return (
		<header className='sticky top-0 z-10'>
			<div className=' bg-white py-3 border-b-[1px] border-grey'>
				<Container>
					<Flex>
						<div>
							<img className='w-[103px] h-[29px] object-cover' alt='logo' src={logo} />
						</div>
						<Search />
						<Panel />
					</Flex>
				</Container>
			</div>
		</header>
	);
}

export default Index;
