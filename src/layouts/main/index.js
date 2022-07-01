import React from 'react';
import Post from '../../components/post';
import Sidebar from '../../components/sidebar';
import Stories from '../../components/stories';
import { Container } from '../../main-styles/style';
import './style.css'

const Main = () => {

  const openModal = () => {
    console.log('open modal')
  }

  return (
    <Container>
      <div className='main grid grid-cols-12 gap-2'>
        <div className='col-span-1'></div>
        <div className='col-span-6'>
          <Stories />
          <Post open={openModal}/>
        </div>
        <div className='col-span-4 ml-5'>
          <Sidebar />
        </div>
        <div className='col-span-1'></div>
      </div>
    </Container>
  );
}

export default Main;
