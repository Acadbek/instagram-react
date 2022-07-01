import React from 'react';
import User from '../user';
import { Flex, Button } from '../../main-styles/style';

const Sidebar = () => {
  return (
    <div className='sticky top-[100px]'>
      <User classForImage='rounded-full w-[56px] h-[56px]'
        image='https://simpleicon.com/wp-content/uploads/account.png'
        name='voyagerdev'
        subTitle='ANN'
        btnTitle='Switch'
        isActive={true}
      />
      <Flex>
        <span className='text-[#8E8E8E] text-[14px] font-bold my-[15px]'>Suggestions For You</span>
        <Button blackColor={true}>See All</Button>
      </Flex>
      <User classForImage='rounded-full h-[32px] w-[32px] object-cover'
        name='xushnud_diza'
        subTitle='Followed by karombek_husanov + 3 more'
        btnTitle='Follow'
        image='https://i.pinimg.com/originals/d6/8f/71/d68f712248a77ff122bfbad8be5a162d.jpg'
        isActive={true}
      />
      <User classForImage='rounded-full h-[32px] w-[32px] object-cover'
        name='raxmatovsanjaar'
        subTitle='Followed by norbekoff_ + 11 more'
        btnTitle='Follow'
        image='https://i.pinimg.com/564x/87/6a/36/876a36270a7fbc5f2185682bef3093a5--famous-people.jpg'
        isActive={true}
      />
      <User classForImage='rounded-full h-[32px] w-[32px] object-cover'
        name='fayzillo.72'
        subTitle='New to Instagram'
        btnTitle='Follow'
        image='	https://img.freepik.com/free-photo/horizontal-shot…-people-positive-emotions-concept_176532-8352.jpg'
        isActive={true}
      />
      <User classForImage='rounded-full h-[32px] w-[32px] object-cover'
        name='rasul.urazbayev'
        subTitle='Rasul Urazbaev'
        btnTitle='Follow'
        image='	https://www.phoenixmag.co.uk/wp-content/uploads/2019/02/BANNER_mariah-1-of-1-1080x675.jpg'
        isActive={true}
      />
      <User classForImage='rounded-full h-[32px] w-[32px] object-cover'
        name='genemator'
        subTitle='Followed by karombek_husanov + 5 more'
        btnTitle='Follow'
        image='https://i.pinimg.com/736x/e7/ea/02/e7ea02d0a8daa8d2a0a9c7d50cdf3b53.jpg'
        isActive={true}
      />
      <div className='flex text-[12px] text-[#C7C7C7] gap-2'>
        <span className='cursor-pointer'>About</span>
        <span className='cursor-pointer'>Help</span>
        <span className='cursor-pointer'>Press</span>
        <span className='cursor-pointer'>API</span>
        <span className='cursor-pointer'>Jobs</span>
        <span className='cursor-pointer'>Privacy</span>
        <span className='cursor-pointer'>Terms</span>
      </div>
      <div className='flex text-[12px] text-[#C7C7C7] gap-2'>
        <span className='cursor-pointer'>Locations</span>
        <span className='cursor-pointer'>Language</span>
      </div>
      <span className='text-[#C7C7C7] text-[12px] mt-3'>© 2022 INSTAGRAM FROM META</span>
    </div>
  );
}

export default Sidebar;
