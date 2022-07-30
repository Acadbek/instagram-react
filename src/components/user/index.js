import React from 'react';
import { Button, Flex, SubTitle, Title } from '../../main-styles/style';
import Doots from '../doots';
const User = (props) => {

  return (
    <Flex>
      <div className='flex items-center mb-3 cursor-pointer'>
        <img className={props?.classForImage} alt='userPhoto' src={props?.image} />
        <div className='ml-[13px]'>
          <Title className='hover:underline'>{props?.name}</Title>
          {props?.location ?
            <SubTitle
              colorForLocation={true}
              fontSizeForLocation={true}
              fontWeightForLocation={true}>
              {props?.location}
            </SubTitle> :
            <SubTitle>
              {props?.subTitle}
            </SubTitle>}
        </div>
      </div>
      {props.isActive ?
        <Button className='text-[#0995F6]'>{props?.btnTitle}</Button> :
        <Doots open={props?.open} />
      }
    </Flex>
  );
}

export default User;
